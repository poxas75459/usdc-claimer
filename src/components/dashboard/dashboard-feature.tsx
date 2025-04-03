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
    "5RqjqexaBTJnZ7f131JWTpbaeY1iiCwDS9ZCSHB3Nz7pGHCmtyhuTaq4GtiMcRvr8G3gDWH7UxSwjz6NFRC2MLmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ypb2JLHDMUCBLHLSWkFDtPWCeifkg9CHRVLSwcSZtS9c2a2G3ZS1CNqSNzHEsoZsQ3U77HtFcUuQWKLjpyrRYW",
  "key1": "29hCcCbz1LHj1KxztzW8gvwFz82PDtZxjERvN2sn8TP7BtQUtKtX3LhgEquE1yVgfS2Ceazhh5T5BWiuV8pTFyYy",
  "key2": "2MFCXuYvkoWXffjk4WHJQDAoGfN8wZwvW7ps36qqzJ5UznWa3yLkASahyu4yQKjwjnByqBuFpX7ucXeYHdV9FPCC",
  "key3": "eZfkCGUxExmVNjFnjQrU9UZStU4cjWd34y2imDF7Cw1sixtNHkLXq2UFBvupweDe6vZLws35ztiMuCoi7ukDEYw",
  "key4": "5Wf7yqmtyqqkSrZQ1cCqn9tGkDn79W8jpGCvFVGjQE8eS5eBTsWJhyQznh1mjnzxPtdrukgY8ELQRtW25yb4LJay",
  "key5": "4t4RidHzZP8E99Abior5GGbw9TpsryZr85jGM8S8bLkh426JRGRWYvnmiZpNk8gMY8pQYB8V9PgkaR9vCDTf9hf3",
  "key6": "3wWtMAsyf7SCogsLWsjUPsLRFkSHDJmbEhv5Za8Pa4gK8m3kbNh2zXFY2fLBFf2pQ96puFCYqfJCTWZ62USup9nA",
  "key7": "4DtWshTK8miUaMMpqrw1sYHazRHRa9jRdSkfEjb7NNKm4G5AMEVo7aqY4gZSbQsBPnWkyqvN7XwMDjBoJHZkib5N",
  "key8": "eEF2cKBo9U6QxF79V3RoefjZHpeJjdK8AHvDjUgPnKWowCA1R5ZvBMYytocTnVgtt4f1RDhvhKtqiwp95BDWGBt",
  "key9": "2Tr36rSNmseB82MdQqnx5GrEbaRFbr5MWhghfD8w7G5hyrqzd9xakXd8TPB2vwLwB5iXLERgGiMGQ4aFV71ZKE8L",
  "key10": "5R21CoWiHKxF58o3kRSPsZR1ZLpXQvSKTHsexLrh2ymUqoSPCYLu4iE2Ss3vns9wSLo5VYGiakCtiXhxTbmYJGWY",
  "key11": "2KUcALz54g5nw7g4gQRa73zpqkNCjhzVmL8Lx67vKsR1yDBNqYBmukAtpSxn3qVWcRQ6ichypjvxbJq89LP8Ab3r",
  "key12": "2wPP5QKtVz71pXaon8ZGDy79B8tus8tBVnweFkGMa1U8vjR8uP5uTvKJFh5pkpPeHD1CTijrgRPsSHvEYMWVtaJc",
  "key13": "2Pv6xteKtVS9Qbn2QtBksQkGtRWJYbPY5EZjgTazRmP7cvb7RmHwGd1PQ6fpCzDRcJibiqXR6iTte5ceGEekoqBn",
  "key14": "3E7s6ZJ6LuagN9SgA3ra7zd4cqEYjGyPCfw2ro4z8ATFMMACSeJtQXK4ou1YYXoVTtyki6vLcpDc6HKFkQE4WXaZ",
  "key15": "29pr6s2hPoSajxK9AotivAUMQmwYRnCJs5RYeMVgLn1yHiaXWwBBfCEky516Nb1CS9nAP18BU77NKf6Jdd8izyEr",
  "key16": "27jtmgGKDgSp6nBLUerXih37tDKtq9V9tvRcfejRx4FB3EETcURd3SMmrEWVx8R2WUDeFSop9eR6owL7FkJEML38",
  "key17": "2RCgPYstkJKj2JFXWCLoYa7jWiDLb8Qcf9wJNU3ttzyherLtDNCHFSKS4M3aF5r1jGXc5Fb3tshPNpSabMUC2u2p",
  "key18": "3fHwaDkx3L3UEx2rEiEPLRiRfU8p5nvdr6UzUqnANF3XqAc4rL51JMHaUmJYWEkkLtp698X25Uupm5TwghJ89moK",
  "key19": "24fP6xooEaJuXLYrtamZxrsYqbhbF3yJjU5jjsupzU56gDnfVTe3ZmWfsidc6LFjRpg53Xci6MyYNfdUMGNevxv7",
  "key20": "3GVc2di5KAxruGmp4BXP7TnPiXcugnm7r6cJnzrUbCyhjhZ1nKBQpQDP5cFrXuo9wwExxuJKz2nqWhxrCwRkKk1p",
  "key21": "45SGS2UuYDXHitQTF59HzpgWQHNLhUxquz7aebW7sEEsd87gS628DokQstw38VtHwFi3v8o9qyaj9e4bgfLztyzn",
  "key22": "5qq85R8T7PU1mLfrxjMN7KgArYvUmEEcVjVS5YUHV8Lmx5J1CJeuDpYP9tXBaG5KY2R2L4tkfjGwSmeBH3jeeuf5",
  "key23": "5vZQcg5E3uNhEVn2CbXYXEk6eRfFQp79SG33eTKhkLEUtmoJxRB3W5mq6jv4h13MvC7U9x2k43mqoxTAGH1FuD3C",
  "key24": "2jHzVNXR5xMcoQJzEgK7U8iuGQAjJvJC1HcJ9uqWNbBPxUuiPZb72VpyqMAjDb9m7DNoJT8nvDjpYP6g5nezXJjS",
  "key25": "4bjc2kBajPJVPjK3LVNWKAKEA3spKs4kfi3SvFFCsiVbZvPkzXYS9P5mECzBduXid45uvCk4pjsrxFU1iCctTNS6",
  "key26": "y15dNiRfmfbwRqRb6uGZyhLPvFMpXjE1fhcUBsLSsfHM8Beq8k74A7wEwFqnrdryN1K6t6J4waDCBfyjhHec4jW",
  "key27": "4dRpSew78V5fP3532Bc9PhrGE1GLST19HGvncjiTNVP8dqURh8y4F8VWJgYXTT3roq1nifKnLNoaN3PYiq8rdsTm",
  "key28": "2biY26H94fWEmMvcmqwLF1wXTRLb1D2nE4xGtoHTRyrvKfzpy1bxZWX38XwDaoK99Ag6Y6xjJAuEY8KGrTGj9Sk6",
  "key29": "BuUUR4Lu1vUnsDxEH1H85qBXPiEBujKYDhnn12ucCVpYC73Gk8Tdv5c2ixXkCuxoWz69i9qVppjtiokoANKDsmK",
  "key30": "3aimxpMa2gCJkq23X1bzcEMbijHsYMrXfqokPC2Aiatq5qW9f4JasLFExTgmfNFmq8s5odWtvAtgcDmoxUw2PDXw",
  "key31": "X87XMamoWqiyVyvX3VWeAdCfTNWEAv5z5yc845naf5u82GrnwMb5RwzpBMES7D5VQJcGHjDoqRSWiAtNSTJj5Je",
  "key32": "5biqw9jEkdz6eyetxw8dHgEoVFb9xuBSRohWCCgYAJS3mHQWt4pg2yHbaGvMPuSzhszwSku9j96BfHRSLVRUHSHq",
  "key33": "4SoMRkk1A8TxXF4YgkEwYu5WiMuGM2hMZfeaUbNuazfBJ5Xh144X6rYwuUZ9twN4xAjVoXPYMyhDQSWQNyXYi1dC",
  "key34": "2HEysCrdcnuQL1wLjGhhAhFaP9shgefikU3UEbrVwq3jgCJGB7v9SqafER9btDp2FQpufjLU5cgeeFXioCLWJBok",
  "key35": "4U6Hazc8AnFwVp7FXsaE3ipVcQsE2BV7rrAZqJpsbg8cxgLeNQzTyiyroiVHAwUmdWaE1GbtqcZCX8f5aPzuurcd",
  "key36": "3mH9FraEfUNjM9nRWcrLyb3NoesSjAAAoGi3oVjWMjhAYrace4NgZX7vGKio1UsmycDjSAco85dGCFHGpvHihpnU",
  "key37": "5CJEqvGXq58wqUUFSxVmRSwnKma69wKxsjt4btroUaQdeacyN9Lk7B71tmNfMgrzLy7kYtAmvHgyDJteQc1uFmCs",
  "key38": "3QPDFEvZPe4qceSg6dJopFQFAmZLeaVqMcyZrxgtyKmCN6X3wyYCVjA3MKSAt5kR9BRmhfGzgKtf8VKE3H1FKuXG",
  "key39": "3rYdGpP31KkwFgoGsrFPd2XqPRiC3C3hZwZHYtuZoR2ey54edXeRxAJj55BEAq7j4emRv2cKHB72vHPmwjifvKEN",
  "key40": "2KS8k9LjAw8qsXXLqFc3DpWcgturdVnwshgZbnQoExSs99M4VGmp7qrm2Cd3TcjuNqvUxUA3DBYMukCGvFkQLmTV",
  "key41": "62yfi8r2vDxpSAygnN8rfurdcHFcLdZpVUgJLzntgTqSTrGyBgg913kiP5cx2vR2NzCD64BCqUTXdzCgcKyx5DXR",
  "key42": "2zEhWASgHbNT3PFCyrgevak9AxgS5XeiCD8gvWZRowRjWDk6CQJ4e6zg5UtSfxwb9TMfHxLNNFu4L8YdA8JmhiSm",
  "key43": "6M7DHNiMZm6kqRCfejSoagXjM3MeQw1dnTzcGSkNXqJU5uANH7FmQdVRZqZuJLpNXgijBn6XxgypRMHS1ev6N8c",
  "key44": "3U2nrDUpn2R3k1nDTBa1wR5R5CG1dWKddmYRLaTPQp1pohzZbqCbdczQn4B828EYTJh7cMYgERupqte2o4XTj5ox",
  "key45": "5EEXwsFDaJZ16855tENmBAwgMRTVGQV5bqtmGNDxKCCnhNvgsUyzbZYpoTrTeQJUiqkKKrzuCfwdV8o7xezsSXBF"
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
