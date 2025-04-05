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
    "2zpPWd5G2eTgMmPHxdBGsF4zCjVW49qim45nb2socXksAPo9Y5Cv8675hdftmPMprCVxHFWRPHpjhRnRntXwzD3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KmWYjJj4RG3GKHSS9aAqZZaoL8BgpquRmdDiQRvvMgfubV86CMzH1QMRK4DS9pAn49Go3Rr8pqFxha55UMq5gcP",
  "key1": "2zXEbw9H85uWRvvTqUxQs9HD2KH9QT8Aahism1tRdUSQeYTTBx5KAG8DXP1Nu1cVmDJXoZrxKynRTVLRUJ8gbHyi",
  "key2": "5jCLuCK9ZvxAzicJagt8ierRvh8RgHXHSr4Gupyh7ux45BwsxnHf1hQhtxSs5T3h56NCgv8eUxfJxFqELUbu2Wd8",
  "key3": "2Yuds2yroSESnKt8MVVTt4D6oTvJ9NgKvGVfQACUWs6T9BNbjB5ZEPozQqn46AtnLhN6sR9gZgVnH7MpaeSbELwt",
  "key4": "3i426Gux7hTXBXavXzxcVzqjqWLhkACyjKcPTADHFZQUFGqm1wEXVmZFhbV719BoY6meunDi2rUCRBHAv4czg11U",
  "key5": "37Q3qKKW5DANDpQRAvWsvxDwL6EuzecKLxvZSesp9EMmVTpoVr8ivTatMJoxpCYE5YViynuDrsXPSVEXEUsiSNrq",
  "key6": "48YR1RUp4oKth9BhcH9cBGrUJP3taTntHQ2sLwv7UJaVM5fbSnFudwK31GYVRHf6F9vgAtMje31tZaoDqGQDbyz8",
  "key7": "2ZZUnfnJvU6c8WcnyfNYiEcxRVd8rhUbCKaJKpWgrRHAiihj1KqoB41ZzpNErVnCNmEbnNGqrYigp9XCXL75Meh7",
  "key8": "4j22FZLAogQvciJd9RBSxnFY75bP6vFN3FLxQtWxU3DXfHyQTJLprftuw8iwee1tPWURP2GMgx7LprDtgu3EFyDM",
  "key9": "c8rfzLjSeAV7iAi9b7jojhfrEXqCW1U2saCYgJfqrsLX8BvQ6pXNWHxGNvkLiR9ftpWFCjG3wRBuC9Y5KmGcTC6",
  "key10": "2eVupnk7UfZaYes92XbonUh4ZqJbBBV1VDHRr1Zm6RzKmcZUrPrwciTnXSUzjvyJtDCVXC4sAryY7YRnATrxpc2Q",
  "key11": "5zPMExH6apJ1FR33foS9wsiPWKfHXWMwLvR3eyVUiW7B5bSFbixrEtR5fscMDiyeuR85WxGbS5Hfv12ZFdNXZ4tc",
  "key12": "25XCpumyW11ia25T1Jga18iLtnjMR8tfKa1iKAoYUL8vdu5X7aqiFyBuooHtzHGMWjz54kko63Wnrns5TrHdagTs",
  "key13": "4ivhC8ABYs2fiNMQLXFig4Hz5CSDmMgUSvqqbyXJF92xUpzTHzLuk2N6irAQmJzGHVpDshaao5AFvwQ1MChRPSGw",
  "key14": "3ktKC9XzxFyyF9ArRxkge8xTXMZJL5q1KJveeZunVHw1HuneXUQZxxjN9YrTUXqKrhwiG1NAD3mLj95YjhXGygZ2",
  "key15": "3Eb8BeLsorVQDD1mHT9ifXou7iZWntmysWqdrnZmd1idWoKZuNFBR3WCNQxhuRsQRgD4iPCBaaxWG1rXYGSFsUV3",
  "key16": "3NBAuoWC4r5xY2j23qVMXWXkTVQwC4NfSGXTstAMTKExDs64JnumwZzM7hAnpoA65gnfLe472y3HstiwVCoeuBwJ",
  "key17": "4uCEsZ33yqse7KFZbPFAYTQbBp2aCNzqcJjAr7ihiiVpMaXPgBytz8dgFLoXxNpEVZ4DNKja4pPj7Eu3xyJqkLJA",
  "key18": "HeJR78N4GwNTpc6H82m13c8xUfei1sYnJpeARiPSDTUqvCV5gzWU2bSVwFKPwNmYEGsXtsyNkQ26z5xm1GnZpMb",
  "key19": "4xy7E1SJBof12KXAiiddS2C3fchsRkmmyVgxk123vBgN1VaFr2mcSzZjQfTZBf9AiWCyatJ3UY4xJChmQ2jiyAde",
  "key20": "5E1Ty9DEyYgB2LTJnzmuobdAXXSTk9M9RnNB6QySJKeNB7PqKn1QuQTGs8nRtnJ5GpmTPzqZJc3W4hkzyWUuJLQH",
  "key21": "4hvbEzm68pQMNTxxhfBhfb5BnmcjQtofsLjADNFM2dqkanbVpdMCEXF7LdhvxeZ2izgXy2LtySCiPLBCsdNewryf",
  "key22": "2FNTnYXuWmxNKa5HeDdJKNHoHHeUrr1oq9MTK26bRhvfeuM9qXxxUbz6TCz4TLkMZbepBt5AkKGXnaPaoqT4Rd6c",
  "key23": "64y3VkwEG6rGYLmD5iJX3EsQNgrRqp2E4HMWgXnKXPxAJacvMh47HuMpovrJQpQ4HF1Zr8ssVMBJLfDqtDM1q7GE",
  "key24": "LHqcEsjz818Jo39EnjraS2J1qoswrKfCEpoYToEngFfaCJnHedgStgTfVoqx32jP9MxRB1LxMkqKbQrGXeFrRm1",
  "key25": "2SpvFsZY8wWiBHMt1Dxavqasm88W3xAELAXP9ExhUiapDTSEj71A4aNwLxVoWFuAy8bTnTJHRznczic9HHCrrsgu",
  "key26": "x3ns2LssMbZ7Vk7Et211kwPAvzQAyVAKKmd5ttrLTktQHqpFyQmUqDndetWLozhGyG1tj8tZa4Ur5ZFqW4pM7ws",
  "key27": "3mvPey9wVYfGK2SWuWE6FXumDb1sgFu3LMxMKhGfjZ1znVWo2WdFq3W3PHWyarCsGhpDMz59BQr5jScvK2SNuDQe",
  "key28": "ZdXuXcyVrAjjayper4QJ132kER6No9wyVeymiS6Em5ZT8527opJqsrJUKJChUkPufoniuyE9YLP6VVHcovgnsrS",
  "key29": "2Q6dxc2fwucqGdkTTySTxu7z7kZnGxgLQdK6TS6WrMmuVAcVmoTYiqH8jdPpc8hCNEsYb6bVAFmUbdzBQa35FeZh",
  "key30": "EbC27TuEpLKNJfHzYRtju9J389dgupodagTR46KUiDv8m3z298HUkhwvUSU9u4AbYpKdM9xREP4q1Jt8y2Do6Wn",
  "key31": "4fEYHpFi1c94gqw6sGaCn8bcQFkUkdatRzQ1NBTcYVnKiBdyVr9Yt5vsKpLSgUv6HXSgGgHKoLkvcahBKogjamPZ",
  "key32": "3y8gboHaLbKR1Su19zfXK3oVAGiAZjv1pF3rSWDsWEUo8nkvSkwGqnqdvQxDqyQJq7W8XdheqtUf32sSQbexZ6cc",
  "key33": "4K4Af52YgWucM8HPKiQFypHKFtaQSSyxRtR8eSoCVh3MT6tYv6LcqBzFdqphFDxqdR2NsnPRUPHiPPz4GifzRh2f",
  "key34": "TMCQPgG3DBPYPZaamsRcbWgHGYPTK3vnEsmA1iaYAsEygJyp6vVebcYGiWJKskLx1pNVd1Aq6p7uJ13nAKM2acc"
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
