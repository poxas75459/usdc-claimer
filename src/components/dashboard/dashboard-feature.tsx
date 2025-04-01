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
    "3xYqj4LDwVR6YDMnnXd8KoUuycErgPTTGLZQmyhwwDZruwWW6PqQDuuftL1AYxzeq1crXpUVb6WL1cZ512RfwoQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QmSA2NbTVow6mVR88S1DP9qhpmuYMxCzhv8BL2UpSRStVMwZQF3RvxE3ornLMHP6FRkyaVmnHuuUZGSCf6wyoXG",
  "key1": "5XrvMfgdg1CUkqkkN2KT15pua34NAnYew7xZReX6qRf6Ng4rswJxkaqczAiBWVu5Tx15msEKaUSL9yYoM6qzQBHh",
  "key2": "GjfFpWdC6uHi3HbRcZCM13KEpetNV6bJkb1zvHo4aLh2RE9BzLRjw1zMwNQUXVFcUkJDPycxnr15nfgW1RzsJ2a",
  "key3": "5ek9SHe9dKimzAmkSjwuDGDfu8NAA93XHS5NcCSb61Uv83D7289TmE7K6V3vbFYBZn4uWkEt35aFssbLcoYkHU5J",
  "key4": "36XDHsdbsAALkSkY8rjQQcETJr7Zudx6tZtzc8UKwhp7TdkFoWo9geZeDfKNsSzyYPvoWdSsPEpuMErx2wgESPDb",
  "key5": "5PyDfr8qNJikhYPi3GeM6H3hAY9aQJEZfbeYrmdpP6ke9TLBurdb5R7mjotCfyWhA6y239MMK6x6ZXYihUGFcLmq",
  "key6": "TZxGSeDuyZcPEyCKix9GB5GhBt1yfN57EKbKddx7nQ22bDQXLQKTis1QSSsfMDk1Npgn5zMFSArPbd3kDaK2hUJ",
  "key7": "65hbaf3WvmQkEFogAwSBcs7c4DxxJDUP5N6TSPxe3uzLTjpnwsbnE6CaVNQfwQz629L4mfR9dyugNDfoqqZKY3yM",
  "key8": "3RrZcnpxKMBPgdkav5HM1dvPYxFB5UCzvgpF6HR9AWGzHfHyP2pJNF2HMPZ4wYgLF3xeW9EZ9iZMp5wfEBzVVuef",
  "key9": "5cL9Nq17YsV4DLHwQxjKMdmCYx9jnZ4Em82zkZDuY2yDJFNtyV9sWTQsHVQ6kFQwEVMTgWpo6vUp3Vzo5SUHii1U",
  "key10": "3A4AhBM459kdtsskYHxHTUbtDPKCFHBh8yoaD8v3tUyrZnvTCidEZwSrRSTPMdUSyxVbcjMYPopPjUJELfbyd1HL",
  "key11": "4jwBRay2VDvWS47oRVRaHpvyGEtkjrksJiqLCqiPMEmvv5N5DJVicBy6vUkq5RkAnYgqFVRd7548ExEA7h47iFRs",
  "key12": "4p3qDK56ohbT1yoC2T8F7H7Z68pMKiNdN9WowzzysYidZfBQ6RNFpMYbHYLueJn5jKz3vgtwoeqWdPaz8SJsFcgt",
  "key13": "5dENBogevkbTgBK14TN2vw313kJgD3LBtgGykpf83EwsfHdUuLRDarqXE36h3LZt4HFPK9YZD7a5UZAyY6Xkvk4J",
  "key14": "3zChoncEuoju6RKyozmw1yH1rxkWH6rfmwsSF2YwtTSRwdJz6EeWBcG31XgwMaY6oKZK1wkBhHRdy7nM19YioJP2",
  "key15": "5tS61VArv7thuzX3Re9FU4mtSraDnasLdXZn9evKK28YxUCN3Phttk6Ar9JasDi4q7spbWLaqmyTzK26jnyLvAaA",
  "key16": "2UZqte9rxnJcfcLLnwBCUJyhvPLL3RhpBijEAV7stP8eF4GA727HT2H9Z7dT6i6AYuDDqymiNvscnuAs33SVXvi1",
  "key17": "2jf5jFMQUvmR8uesdNzUEeA2JVk3B424biAPPr4Vh9bd2HACqd3BUqkg3dERuttM5Jk58umV9ALgH8zPaepMqKyT",
  "key18": "ihWL9cxJHswggafNHbJYBwPZATYyuzhARRYpsrVbYChUitxPNDeCwpxq8SZ9gjZ3p23C2Tnagi1uppt5M5NtytB",
  "key19": "57WJnSaY1eyF9shVsFdMG8pVcts7iRkUm6k3aZga2MwKa7TkpD4LwzHSSfLKaGAMKegJDRaAEHMnyShCoj9StTgJ",
  "key20": "3eSzU7kmnjwEwWPyRN9zDLMuVpkPVrNmUQw9G87XE59PotutoGJLVxmHFCUNt154RN8PnikfVB4M7UZ7eNU8BUDb",
  "key21": "66KnjXp5h4cQmCn3vVoH2krpu39kb1Te5J98XuUHSSSEmeYKg51sfNQAu6ht6DrRCfANHPir44pvuxge2uCTppsA",
  "key22": "2CQb15HVAR1mgdQoktPKou8HTi3Aiz1DcQXhXjTQErPRJgqdE4GZBnfBy7GujiMDxq25cZRLvkviwBN4z7DagWyj",
  "key23": "2dxMGmr7rdh8rJGE5TRQiC6CgG9vzgeKN8i4WvNk14TJbNQa6dvVpUUWmkdhJJHC3uSTW5JZY32gY7FWo3kYXaWX",
  "key24": "2pTovhBmCe4NyxXRx37mwzfh2kEdv6kYGsNEX17NFZ9tt9ZS4ekYsgh8JQj2ZLgX7TK9vChS4GvdF1ByfUiBjRzf",
  "key25": "3HxrWju7MWVo6421ZC9kBwQ7nRfshYbQD2PUJFP9PijqbhDS67ERfzKYmf36C9MJCi6qYUQLaJvwHYTMbHEs9mHG",
  "key26": "1SagEzyaSWuY4UPotyV2NR93z3atDHYEbRtMVqsyaMuj8sg1RkRB4UuD1Kz8fDcqLHvQAH54bhhBLK351xTq1eD",
  "key27": "3Y11Sq5uVEFFn8SjDjanmGM6xkZzcKD3bUb5HuHqH9N5zAft3jaq9nUs3C2cKmotnYZDaSTVACHuKkb3qvKVhV31",
  "key28": "eZMq1ZLDxkjAwW5YW4zpkr5CNrFX1MfSScqQYfCz9QSPPSRAyKY3egLQSMqjRiL7Rh3sQPZYcWAJZmENxkj5qbg",
  "key29": "5uN1RRV3UExGfM3k9oTDQV3GksJKdXhiVFgyJfqP6i1cJwDEcB8FYKg8SF8krfKoVT2c5jHVdMiDoxBodZ4DhQoo",
  "key30": "5vvRiDfbUEWXq3v5YTpnQcknbPkyQXJS8kdzbe8UuZ6UrTouLSPFgZ4fk1PEb9G3p8o4k7CDfQ2ToJCwTupgxNmx",
  "key31": "4XW1ZUtRbRhEeTHW511jvmNejVnc5Ejy7eGpyjHQiZvT1ugPnrX87XL8Q7i9e56vdt7TMAR2jwjsXHF35A7TixoH",
  "key32": "5LwngTqNSbFbs1nohFijDEs5npWVfbJDxxJGgsM7r1Ht9J9Vrsuk5u2RwT7k1ts7zoy13ZLAJTKjmpfKXSVznqw8",
  "key33": "5rc7D8ih2DTYpHLt9fXLo8B8So9fRAg5BTsJUHzwe3YgdGCx2RRh5UbXDyWXRoz6ydo9eMkt54WibsWy4NoPmpwH",
  "key34": "2serJ3ZpAcFAfLYoFbdbriY4LMB4QjpHVnhgVjJVLtUhNambHDwm2iMQkzeMxmNZyuCb629hvkn2vuSwgN8FEkp9",
  "key35": "2UiVH6vRacCWegY1KiacbCAgsrhbpTBGR3WFskooFXNC9Hhtj9nSfsRWhBNZ1tAwKhiF4F76tzybJeHFpNUFr4X3",
  "key36": "5npNv1DYtBLr3QUZR1WVUgtH8CSRnJoYGrZLGo6U1Gvco7D6G9QsQoXpN383foY6EWvc55Cj6CjKGHuxGv7q3nke",
  "key37": "5jHpGZVe2yDBLhK4RZktiQcjDhP6tENtGs3KRMoVw3zQWXwyybHZonfF11e9XWB1w8N4bDT7CC8E1CRmKnJbZZUY"
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
