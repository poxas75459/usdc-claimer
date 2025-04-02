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
    "5vGNj1qLgQqRTS1FzL34CbdPtYgYyyGEzMNttwCsJmTpNDPCqi92g3JihktBvBykP1c5YqCbm5Sb3NFTYjJCG3YM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ffNAFJQcqbKtmVQy8azoaFXVtr2uZ7V2zc4GVrWsBSK1aXqd7DgiNcb3CYMJKeNcxQoTouvXaMn4Sd3VEsJtdS",
  "key1": "3CwhzFPEMQX6e3sEFwoEYGzhYaTyCnaGPQw5F6Yp6svSKS6USG7NhNRkz2Z4huKvrfoxGULYs6UpHBcaMUFz2i1",
  "key2": "27vje3avo7qNDB97y5oMaWhZsnTvzDUVYwL1VrbZkYu8mr8MaytCZueALQK2aG9PLXCRFDTtAjHVbe1bdu3EEh7k",
  "key3": "44P6q2UAnDFKcd6bhfF9yfwzxrE392D6FEq3vmzptiWfgG7q6kshCXSuFT6munjRjyUbBrcpjdgRpaVev2nz27uJ",
  "key4": "Nzini2c4qWs7CAxWTU3CQ9HkjCKG19pcT4cuUHY8HyzkDefvNQYFC2s3rzjSM9dShn98LHk2ebir7W3EKnqrWq5",
  "key5": "3RBnWS86Mu4v9RWBK4uk9URPA1Gtcksh6SDU4zsaaoWwHVBS1GaQBpJ4X9FsTd21GwRPwU2xMxafkTNVue93RWhG",
  "key6": "4XcFUwywnxaxA7s46Z97i8vfDC7KthrUa2pNk3h4MonNWCTYBMpyARYf6mNkscmPnrty4tLk4pStqKNT2Gm4r2GH",
  "key7": "3dxYtRyRQVsMLU5JME96kgDiGUGZBpJuSHPeSyKujm5M2KnkejZFd1F7ddXDbdsmrBKPBxNXXqy1jqTneZaQ2xgC",
  "key8": "39vFX2dC7SkR9grrFKAHnvUtBJJHx7e13pZb1UXL1vcNqbQccvFTrvqKXZRFkbGokRR7rS7orfmD9bwFbWoQGDCG",
  "key9": "334ME7a5cE5Qv6GchehJMobpgW6xwEWg3FgsqcVNnTq9NtNFeyDbDAiWvzvP3m64WFMTBF8bwXMCCzoyviXcJiye",
  "key10": "2HVm5E32wH1bmif6SAaTwfSETWinr954yM6Xe7RwBB47FpEcXDHLhvX5kteSk7LSE8i964rVFGSdrEWVWeD3KtwB",
  "key11": "3uxwQgq7ZBEMXga477Pg7LYTZycAWT6ui2VWjkQk6fGEfAmeev4fbDCCtXaEnoKhUaqhVoj8Zm6QJLSNGBEaTCq8",
  "key12": "4KkuDzRMj6PiRYk5cGaM735aQhzTJngJrEgU4AM7VcCEUUR3VdMZ3pxYPNEY8x16BMg1qjTqicDgcsSCSBH7BTnd",
  "key13": "3oBGT169L49FwDHqPcACwe5TKW3SJadtHUXS4mcdYRVXdHLQRZ7ChzKU29aWGQ7N547moFkst8T2vWuEfJ6QNEBe",
  "key14": "E63XRjgT2GADkkr8T94g9kuwy3xNvToFVNcQPVa3wvNE1QVqVGPXJNAebehFfaToDFbmqZ212TerfJGN8UyCUT9",
  "key15": "3uVpK4HKUZ7BfsWxbqYv9nCweESp9NtP4JUWFdjtFWcP6Hf3pkUcdDtjYaBCtwQXK9V2yFqPrVkpKhSirtJeBZtS",
  "key16": "46H9WP8VtY5BZCkrda6zpfYHik2RJ1H8K8AnmZpmCbETt75QBJnddRDg79Xr8B4qSuVF8y5RAh2guGmtHciPP6qr",
  "key17": "22k84Pctv565Vd6ZLYpi3sAU4iUJ6zVatFRt16i2nRY3agHVQYZ4vhFKJ1yuUJbCchksh96Ya5YsQRYaPfZJ6YAD",
  "key18": "5b7sc8eXLc84QGpPZg1ixAJkNPHZbYxctHhQK6oJvtGgv9XWcmyWcdnJjgCUT3FDQXiPEZckhhFEaFUDmNmZ9D9Y",
  "key19": "5gvN9A27bmj8vfZQCPy32ZoPCzXRdW1Y9Vfztg5GgKut24h3HH1Cm9LFiCjMM3FpWU8WKFCvbsQm34ctjm1QjWjL",
  "key20": "5EeaX7EcwXQsPpXzprgtMaqDGcUXC6P563MKqNXb75YsPU1kWYjB4eHEBZ8WW8ZtqwqtKi5ZZB7A3CDeU2b2yjCM",
  "key21": "3afkZo6Yo62ja7pnYE2MDxj88hDo6FAr2CaCyawe9zrUDKt9nC1hd4iyS8UVrcu2XdwYd4bVG7rqFndX82UUUuFe",
  "key22": "32v8WrMnTHFoHpyD2ySR7rn7VFcQk2f4rTJ2RrsvRmXTPXKAeVfkALPBNnwcFtpCc1nCNndbCRq4KLWNa6h79EVW",
  "key23": "2wHpixsSGf3pjfecVY7RfVLrh7L7pTRcbWRZL7PTACJQcsYwCZA7kRovEemDgkriJTp4jky9wBk1dG9Z8VvLCsSy",
  "key24": "8PpVBmDd3WXLFbGYixdC8gV1wBKdGtJERk7gSpr36MsJp75TmzW78qPUmGijPUgboZdeHsk3muZsgG7ULiGUXNE",
  "key25": "5Wq5t5T8BudFZRCu1AfYuoR8ij1XtTf9bHZY5H22zncavnMn1v3NxDmFVa6mGssska7HvUmZpd5NJUDBnqWonZHb",
  "key26": "5JoQS1tbYFMX2YaCP99TeXAoykMxHvEmYMVfArv2wUpaXWgu5fAtVhjfA95ZtgfQPo4cnyvXTEiRWVWwr8BsvD4J",
  "key27": "3azC1oCaTpkCHMLTCV4dCdbr1GoSKjgpsA8J8AHnU2y7TYsuyjLKffxdCXB2kpo6TF12ufd1o4YiEw24AcSSgfmu",
  "key28": "5W5SekcnsjTCjQzPZBJGbhqJWiPvxhdLETV7H2mXXFoDhUvyRoSGVeaygqNf5qQaFYp3SCt472H85LjVA42Kb16H",
  "key29": "3fk9AjHF7Fwomv71gDk8QArug2UCxhD9x2PF2Vg1324tZC8qvhyjg3rHww7B87TKzCvWTP4mYFceqJE5e4g8Dfvs",
  "key30": "613Pjni7JT2jenLAt7CoWqGmdEbjhs7dhgQpZJX4NifZj4ctgiFVvknBkepd731bToXhev5kySLZ4ZWCEAmBw8t1",
  "key31": "Wm4GYxh14Ko4TYSs6CP8aXXcuEYeffhSj9kSDxkgnTF67axdamSB9saec5Eu79y6buKydjKipq43q7nwZW49eSX",
  "key32": "GJSa1FR7FwRwVzEVxM7vNeRHCYp7vJmP2CVHQzJGqUsEfHtBgt6pXUNHYcVe9cc5j1MCHrwmz8TC371Vze8UZqe",
  "key33": "3sGXYzV8xEdqY85h3uVMDJ2QGGh8eA8HSMbr4PwMhkf7y7uDqZZTj12BWdmsRZdagiaqgMasaT1VPB7hs1zEWiWb",
  "key34": "3aksAYqL4sLqbRiiJKUmstrSyh1gZnvHTFqWTnouWaEZHNb95jPaUsCsWJ15dDpqyCdjR13aH7Pf2DZHvVR9NDMX",
  "key35": "5m4pSwefbeDQxvAb6yRNLYhep6xy9SJv22L2yuRLxL3bHoEkE9291rrTCrsX6SbaXCmhzuMCrxSsqHoS3tXy89CB"
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
