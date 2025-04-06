/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5uV8UF6GzP5LtzxHGefaBuGuYfwRdrz2xYDevkm1fwVBnb1J9jVNsZD9dxAKXc7tvHLneTMX8gqV7FcwQW2ZQ3oJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BKwkS9123HCQ34vd5F7uvUQwkEpW6RUNQZr2kJRSb7ncvXHHepcQJsF4DKQABgFd9jyyK64uNkXRafjcFwSZQv7",
  "key1": "Ltz2reUu7wsh1zZzutSkBhQeauMQQepSAi9VztjmoqqGfy6x7hVyfXMaM8VZtxbDbM4eaRySQTUoqmKwweGQZCy",
  "key2": "5jPs85NCFHa4XLXXnBQ3VmF3hmamn1Ey8KBWaJucXeWcw99dPAPyJotoBkge4HrRZ8XMNjL39o1RcG13q5EyDPm2",
  "key3": "4B2BgcDZv7y3hnQXoVZwoUjacu9PBbK7bziT8pVfJK68yWgLCaP16sWM12qFgLTbPmc58Edo7dGJTV6qYMpy1QtJ",
  "key4": "48zKHqbkh16GNTyzBG4HYJeDf2RSHpgQgPWhps3uFm2eRzLzqfn73kv3pU67FndJafkNMnSfVX6Rqp7SotTp4y1K",
  "key5": "3rfuGc1XdGEmU5zyt64Cgww7hvieArCC22cLmtDRWZMjosEu6bAeNsaCUrVy2W3jGq2Kv5nka4RwPdk5aBirAqAS",
  "key6": "2Xzjz7J1GdFbvT8mDcbDJbg3BQUoRiFztYrhk2eGiGan9yMTDJMCcMuPzzHLQZQGPnkQaVDshfJPAq437rPC5x2D",
  "key7": "4vj3qs6FGmYxJNFQ89do3kwdjj4cQQoiy2qzWxAVNVspGVTuXFpx9d8DR3bkUC4h2CGP2JKZ3FSCoujfYZU63mm1",
  "key8": "2EiCwXmPxRCYyVeXmAjDswxY4UpKHPF4WiAdZwFv5NsbVZS5frMnobQabZoLUTXJwUmrHjJZcMDT2zjUuzGowV5P",
  "key9": "43Fo6w2kz45zUaZUFrujd5pScsdw9d4avSHSgKoFdqsvCSTmbujbji9rVqaBzdH7EaGC5bSiL12XopiDG87NAgrH",
  "key10": "okjSqFtW9vmMSFwbQUeFRzxSH47af36CePyiTWSxwEw8zADSMyhRAj9W1wxRPmbkhi7nUAnHMXdeaxu3QLyK9Vt",
  "key11": "5n5fHZEdpZPDjCyWVVgKsevdh33ouy2dU6ZaGqg4SVoqUDWVTi3GL8ZXqRDbbjHF2MKMtisxT7Rt19nu49Huia4J",
  "key12": "2WvtsbdUMuN3E45z5MuK2pcuZdGyyxG22fMwe2YNsveBf4P51Sy7ejtwcWkEQn96mvMsk47nSKniNdigY2dPgXar",
  "key13": "33MGeUJ3Nz1TnZ2hixkqJUzFwXEExrNrcZ72GGGVLP6xnGwFmrnDadyzjtrkApU9im4kpXPWgEUa2ArM3EVk5v7R",
  "key14": "26YVcSBhA2axhNmPod2y826gdFcjdfesnYDxuJtZXGswrw4DqdA584ougF2P61efWeg3tJWya4H5eG5We218bY49",
  "key15": "3m9XStYUGPsmKUQdR7n8tjzVR612rWvgzsUsEssd314DUMwA5DzZyhoY76rRfkZdXGV9fuiM7AzTNVatnFjHfPAV",
  "key16": "YSkHAfZkneUWVTDeS7dJFYeo71Zt4grdpnYFxVFJZbYDFkmyUkFdCwUJMFZmp6EX9aHvAYt66XGDNmg76CDzdmv",
  "key17": "3SZjxUWUF2LzwsyXhsw4vAJDtevrqAcNan7tNwEuUYXjrxiT6Creh8h8qZsJqc5sstfoY5MFo7zWbdXAo1qWq7fG",
  "key18": "3g4yQScHzwyTbgs35t81kVNiwEdFzvtLhGDAFohy3uvWhtUgu1VJweU18usuxqdEXgJHBFukwegZxsuwWutTpzuE",
  "key19": "3B9qukX7ERMkRUoyRKpk9GQisWxyU3HdfHgj62iB3JpsZiEtAduN6WMCMgNwpi3r6nVxgUXFPRxV4PJmstXSai5g",
  "key20": "4Mtp86Mvn5kd8JzA9fqvwmoUtzzRfArtj8wV1CpKLNeK38eyJHhPa9XYwztcAt7cxc2GE5c64nWE6AYdvCqBUkvV",
  "key21": "4grW8dRjW1nrnjwTaXNizFGPhKFDwuuuP94LYNcH2Rzx7LmzWTFEMNb2UcB6eobAJd5wTmsiSoBm7sCVbYssAxNn",
  "key22": "3xdSD9hjHRdd7SbrTbvKU8n1GKquMBssibr1GkqUWkDD3WWCS6UbAjvoGUqVPgDM4Rj3Mkz3Q8NyeWC7VCAJvxmZ",
  "key23": "3svRphfbSfJkCbFwwxcztaEbh1uQg18W3khEyNpoSVDXoj3GJ9wF5MWSeLeVsGryHVMZE66uYTh4Smfw7M4i6KBB",
  "key24": "3T8ucZ9RRag23GHPjjo4yAUjWc3Ryi24zKz5XDja4DECUap1B3q3LMMrrFLMiSp5biSDr2VnUgmQm1Ybs5Fdmny6",
  "key25": "L2iiLWLbTvD5DJt2a3NwiNFW4AdzVWNcG1cjLS5Pxzpiq4MYGAufiqMGXcRoALK54QAxpf2oaGZERrr2F4fZgAw",
  "key26": "4ArV63UCERCpH1q1e6kMZgzJTqkfHqkjS3NDDP6Xd128FkYB6gLyygxSQmkLAbMf2PRc4fFfL4fXUHBKeEoSurV2",
  "key27": "5fZNqD4qFKgRDwtSWzRibRhYbhieTgrH4mBEZaYa4Gx5Q6vVi7QQGcNKhtUiy3UeRh44uJpp7CPpCMpc5kYJ8CH4",
  "key28": "PPgAJG3rwtpU4zDRZP8XJn6djyw1UkuKoXHhJN4ZWYmoDTgPNgLhc96ftmqNkz3wijAMz6q3LaBkrHdnG6RmhbY",
  "key29": "3koumtmhtADWb5XxdBjCbt7Si4HnRsCuRth7AEBsu37ZeyrBgqoiFxvgArf5qzuTJ4yVQS1ZoT9hmJA4kypSxiGN",
  "key30": "MBNpG8vreh6badfWRpNGwctGakqxNom8CMZqH573hPDJ3jp3PYAMKzkkM6mcAAgfm4hkhK8wQguJZ4wFowu981J",
  "key31": "2A128Mzk7iFm98GeDNVLXrxCim3dhV3EBE5Aj4HWm5gHiimweqw3UoAMNjEsWy1fkq71mdbzSZ7fNbgGLWPhCKGi",
  "key32": "3CD1C6E8djKUDHSpNraFvRcgWC8DUuFsw8J8Cg3EZBmaH4bnmFpXkTon7hKzqBeZkjhRwErst8Con8q9zfLh1RWx",
  "key33": "54pNFoKimcJgoemewX9vgnQf4DVNdCVwSeTwGogxPKYDBMUpBQbwPyvPrZs7FWyFEegTGfPLmJcbqN6QETWxbgsi"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
