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
    "2DSWnYZ4WGzvzjGPPXERKtBGpSBsjqKBXxgzGBx9FbRBSjqS3LmkH4vDAU7Zdpmq61nndY6f3skznrKdkqzrkw1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zPcXnLdTruQjUNq3c4v6hMLnLtiTjMuwuuAZt8UZznyEhtjWfj17dnzPejtHwRhovAHHRYrigkQkDgJnAJbmxKG",
  "key1": "5iGdenkmWrkBRYPYWiKJT2AEzhbQKKRypGYEvELv2c6dENJsyhkTfQYyZN1kCo9NCzhkHuLeEBYZqkFbqwEJ5ygL",
  "key2": "2qQeMSH5A1aUKMtwT39HNVKcPxuz6mAaeBE7CYbdnWq4BW3zVnA5CwkwLUtegyWpLcpNuFX9zKKx4ceZecyQVDeZ",
  "key3": "2K7yYYhzYvXpuUyxhvbmQ3EhX3yqHQUHX92FbmKPuXQZusDBhKhKYGeg67toVE9miHpLJSsJi25yN5oASGtmm2zD",
  "key4": "4AWM9KWoz51ZnhivRWbHD9tD64gmrCA1uqgTWs8z8C3yzaYJvLznTFriQ5CCu9WfV95BvRhkSeUWAjXkP4oKvoWo",
  "key5": "5FSYrPoUrq6GyQ6n9ksjfNNtkyGhi3hNBA3Aw7V4ftpKKRdREVtnoqRBjN1bSEmubmxwcGACPfRybYxTt82EKvd6",
  "key6": "3gAkbrSyiFAecmRoWGEtMeT3cSgN3Th1F6uLKef8eL5jJT7GeuVAPaXS6pVWxq7b69MTYuiefaeTe6JWDV5FuSmN",
  "key7": "2a6A92JnpsFzs7zpgDk8o6NxWhBcRKY7ApaeZnp3krhSd2j8eMR5eThsyqBH1TAckAMkqjsC21pKmPcQ7m9zdtdS",
  "key8": "v6TtMmMx1hFkQmJxTM1eViJgcY1MAq3Xh14W6Vemx7PV7uPixAuzuv6ZQbcWM6KLTZ34P7h8tTrPJ5HBS4Wypt9",
  "key9": "4hvb9hq2yx4yusCrhz63SQVRaDMrDgk9MAN2ZNno9e98Nb5yMCBopVmzq8Q3BovyGY62vqGHjCMUGx7JVaD9iMNB",
  "key10": "3WkJr1AY1iw1ePyWx3DZpJ8J1aEu1zDFksdHjTvYXKyuKrEEuY6pu1CBYG3pcGXP5KWoSG3Bt5uqKD5aU4fX8wC4",
  "key11": "35CRx6Qc74jQaaqdJo8tLR9gRCfEZ8ton9wtJb5PdFw2JZtPsAT2MoGQkJQQYH5jxMYeKTcopsCNsPEPF2BnXxyp",
  "key12": "2zzY2Z3Urg3cmAoKT8Gmohq6bdQStpU1sQ6mfAuZSSFote5ovRGQvBUp6GtKuqmpiQnegNccvxPkr6pfTws9QZCW",
  "key13": "585Mj5Tda2JxyTTiM8pcZ4FzmY6TBUtaiC338XqEqcEXH2dThMSqkTDCcG3oQkbgYf6kbCDEUS8zzUmE4wzXAqpf",
  "key14": "413gQun22x3MdPkQqJ3Bw4sxU6Qkv6HdqwS2foEP1ZfcQSyNBmdyhRhzpMixjyEjssQ3Ta2j3GPYuDDqe9e1UFZW",
  "key15": "5WGPdhagjtAv1ncdk14ftj5WVu6j6KU58gEqksdT5NW14tT3xGGFYb7x8BzNtV4QGLi9reHBGxJ5uvuydf35ukgM",
  "key16": "aAxS7kjuiCGKeGmuwTd9rmwrsrdBknY9AEmLKZkPBUTF4b8P18odYXGWD5mSCszAkahYe3qS2oXyeKAxDmmPPZ7",
  "key17": "2V4ARodUPdgWsnndm7y8gEbUjjvuWbLxufkvcE8eHfDKn2xeqTvnawqSA7uKZkCRbpCq1kq4awG3uv8NsTsF2TBs",
  "key18": "ich5wjHzbvX6D2RzLV3J7LnnMvafzMF19aGUiCSNFodFMLhYqqJcN4SbHxFES76GmwHNCQ8uua4RCvk2iv7Jzn7",
  "key19": "3YfUxmURU87rwCs7MywiNto2jQh16Am2M4cEKMNZi5XoowBAUncHkpEPKtwVa1mT8su42U2be9Xowwzg8d3mUyKS",
  "key20": "3fg1jkEff1yHEt6Tn28JefZzSzuYBbG3z1EF8pPeLCBQY3KbB6J1VESn1e8hqdWD8wbNW2KR3CErHzUkHXUyHxcb",
  "key21": "4kparWUe3pTsZ92LjpyDocCxCiDJ75uhGB6kTsGsLdRqX4ujbfFyNJnBuTDZwQQrfYqPKT22HL1v5NHTnNACALN6",
  "key22": "2TAXhKw1pKk48LSgXsPALkLjrdWzs8vQBEKAhjmsa6W4HLzf7mdoW3V9WY3riDQLtQwi6Gf3t8TRDNeh4mQgF2R3",
  "key23": "5f43rsmgPboZ4J6ZXJK4pDZgRjQgT9sjHjEEh5GiHs9mejReRQi4YmbKK8e62rHr3W3b2huVbZCSPnUuSbz1bvX",
  "key24": "54C12hwFGMBmwVsxQ68okvKyscwr2uKQBKHKd5EfdbCj95zoBC3HEmsy9rx7Gg6KMMEchg53uHXSaHjqHbTFy86P",
  "key25": "qzAdwQgTzV2hCPdvneApZEAMJ3TgDYTTqMry6jyDWb7fL5FmRXRMEBqAnnK8krW2dSvFj9fUpjW7WnGotBQDJmL",
  "key26": "2uEArDj3c7exwiHGQ7KrJRqR2YkDobvPpcKQk2b3v2qwzQU3hrvZ15DLmG8neXvLRkDJUdo8F9Gts9qRqJUyMToZ",
  "key27": "4MAo8ETE9bBGtvKPnhwXn4C4f54nPFtgEsRSfd121BENdK1jbQKihkazyKaLZrGQJ6uyYvCW9vqTrA96QpaPKbis",
  "key28": "66yu51qvf6wowFe2hEwbTGjErY8XXTUf6rdjzeAwzjqEdoQRpcWbkHAsUaZkpd73qpQSviVDPDVjzHRF6AdSzeBV",
  "key29": "3e1PDvxUVz78cE83hDhpihL3gUNifzXhSeeyHemFBZAoWHC8R4o5oY4DQTrSf4KHxFA1a8jqQ9WZPjp1iRCL95u",
  "key30": "3DRJQ42qiHMD4d556UoN3iLwFCV2R4Wp8EaDQKgY1NFczXag2tiQRyiB6G1iRGEG1NdkZ464r56PMEb93jCU37vH",
  "key31": "3mzUaYVD9kzM9UdxjokvyQ675BMSa8b8QbMo4rQtXx8kVwfrqNz6aqj4hBxBufSZ1kbpkZ8cQRLRPCmTJWD9nXe2",
  "key32": "4cb7EruB5YA58F9VYmCwYJsSwb5ueanMokyfef5mBDg2qUdB4r8wJJDQtbXP8JqeyB7JBsHcTiAvow3awcTYbPG7",
  "key33": "5bzb3uKuPVSS5Mjd62B5qm3CxcGMGJEEN18hqRfgDWnUkFYmEFURAaLynfX43dQVCVWiXtDMuaXzFKvrvS9zaq4L",
  "key34": "62MKn1jhs8dptMNyGZr3oMRuipe9ah6GsuxQoDDicT8eT3MJtVSuzVUxZUSGWgsbyakDsNv8ssinEhGtT36s5f8p",
  "key35": "RMbndGxyzto6rPD6NcHcRqf2GntBDzJRHB72zbF1P9RFn9hBPeAZupz1z6sHHLkpXn4nja5DwsWu71oRMh2diiv",
  "key36": "2moabMmLwRxvWeazJPtaZrouQmQ9Dck5oDzSCeAUcveU6T27z8NFFaszD3TRTMkSxSpTJR5BgY4zcsBzL4vnFbYM",
  "key37": "62pGPh6erj54qWUF7tKYjFEP985rueMwXTwjEHC2rWzkmCpj7EpSqjGr3mi8dvzuJXxdib6MUoAVwMuJ96QjVQbz",
  "key38": "41bayR6hnAHKqxDTqRzykjrGrmjCXChz7N7tNhmBR8ALSt1TCVDHYYpQVWjEZaG3oymsAD25ePfLuJyEk35CLBVC",
  "key39": "5ohcQ8wmnswvjEcm55fZEHPrGDFtbbnEU4zTRtncTfCnzYXmkP6HLzJYk9oKMNSZKrgudQAhgf5Vnc6ngodqnr2o",
  "key40": "EXZoZu6tF7Ta9uB8SF9VqXytp69tvBJjpZmGuty7ZWiPFg8ZM1fSf3fMpxbZib3ujMpueDxPLmJKhwXESSKBjpN",
  "key41": "2LomfbaJfcQdR6qnPnfQvyMQV4nhMCVu62andBe8ujfhcNT5cgcqsrhTYPCsGGyVY6AsmEURphLS9GkXd8wnDWFo",
  "key42": "4tvo6FGk1Ck2btNp1RwxKrn7wYK2AefywDGp1WE9J8JQGCcGFrAcfDSEFtmuX3YawhqB8JYQYH3YPc5qXrBcCvtT",
  "key43": "3wjzix6hWVsbKq3RyAdH6gvnanmayWgMpW1Nh7raAS31f7ffmDDA6guSko5dcuZv7bjSvgdREYi3k2SkaNkhmfwK",
  "key44": "4MW1jBEMjhBpfthW8N9Y7TxthE1VM3tXDHCKzisZMrnAn6woeBVdS3WUihY5LVSfkMhNgg9nHqRBDvfdGrFSWDF",
  "key45": "5j3k78Qre5CySWARo3c9B9oWXTDEL9VqdMQqgEsGAJjPTPQZc5k236Q1wkpvaM8yugr4ZTQXq1oeEosc7DHtMiR2",
  "key46": "4hoPzLV93SEfHdV8aLwEwcpZbfEFQGT2h12NGAS7Fpxqm53eVbTSg8eJizNhisZAiUNFUNzrM22ZjhjUfk3BPUKo",
  "key47": "4uVwTpNPDDmoPCHBeRsj9oxiz9sk3QRazDj38rRHhpgNjdqnRgthTGbbkUFeMze3SCMBLYw7jFyodByrsVN69wmn",
  "key48": "4qY4Ur2oKBFNdASBaGL9RN7hzFngV5QC8ectNWLMLP3yer3MVuzF4sZh3BRieqSnbgtUr8GcjGYVabuHMVCXZ5hq"
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
