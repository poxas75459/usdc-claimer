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
    "3xmndbc1HBSew4kz5sSVDofgbNjLovo9qHKhtq2kwUhvk5f1ATRKXhsroktdgvtjvotMhbLWFq5WQSkUeVEz2CUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vkgdyphk1kCWgUQqjDBuo18KhcmBDfFXWjKhW9BdXgPAYLyc4XN2AwbztBipDaR5fncDvAP5CsWoMgDtom85sVx",
  "key1": "3UnLvGYCTqP18vRboBA11D3WPtb6KobctoTdZ6gD3tWy6AsGoTm3WAv2bDqW4sp3NKCncWpjifnA3AhAFnmc496i",
  "key2": "3Fnspq7hspX7Nm7dbd1WXmTpYoFnGeFt7ePTvzp1NBuw6bni5JgW3kg4vSXW5ovbhvLnnQt2c8pvq4h8dLBwFs2q",
  "key3": "2FKoj5oxVCMk6XYq5hbiW2sZJ4BeRrDakgkUo6FAm2mP8cwKGeoizV4os67RGddiBGDkH75Uhupw6je2j6uK4Sqj",
  "key4": "VggwVGwmkJirUf85kN6zbdP3vLGtr26x9n2UTPfME4rGzXJTDLUK4J9vVbE6pWmJU5be7ZGrBtahxGyywNFkDyz",
  "key5": "2XE8sUnphYtmC9uuUmi2pBK3EYNiuiZXsE6AHfkuCfwtfveuHeJRTVbdsSkQcanxvNgsBibPCDBV7aFoqzpG2Hm2",
  "key6": "3KFX6JBjDtaru48cswFg43UwEAzTQW1VXAhuDLu6u8LkRbXTnQ27RZorKw5iddyytjurSrDe5YU3rAwPSJQ3g2Lq",
  "key7": "2DcY7TBoxgUzrJ6uuSTNQXCYntT9VnXM2FpdwaqewWrFXHSDzjW3YYFjMwvajQv46vKEW8ADTCMfebaPXBf62HTB",
  "key8": "21aaap9dum73iQFEzFBAy2qZcbqTMxaoRCBhJAuoCiqySMPeumHYCXBbhiYRCrvD1yZMYdcZ6ABSe3u5ev6h8xr9",
  "key9": "5t7qa3YphMTGDkDHczbvZQh5tGdrVo8TQGQjEZmq28BFtgGAhGjyikjQVM8aTAvZxPHgcuxShC1Sx5xWhxdwRr9i",
  "key10": "G65WJS8d9YB88DNYswnqp39PGMd9vLhHS6JvSJSLThHQMTM8A79h4FiRd5noxYVTimjumHoqiYihi6JXTWuGRxr",
  "key11": "62CNDfwFvdLmLnFudwiHRGBeQwPQAtdAkqhkCFoiFB3YySJnKK8NfWGGq6cxvCx8zqpghnRXgyGwvKxEFYaBy71C",
  "key12": "24s6qmASgsUJLd6Tx7CzkbMuFGcK3ZqZvMYkPBzCqDdwBfPRGmss3HtZDjsVk3bTgf6bvP8Cbk4LErjTZLH7dQtF",
  "key13": "5EXikPTdbNs9unKYpDuHtyJD7Lqj56SMyVMxd9yPAiJ42k9ntG59HMYWTadZYNxjNwyaaGU5R84x5DgGksyKvvcQ",
  "key14": "fRLHNKdr7qoYVLYh6kuUwRmEaxabbFhmF1HB115km9AyoHJ4JaMaVq1yDjSn6D5MtG3ZLfPEHF6jMByyz6a7m6Y",
  "key15": "3Y43jcrXFXPx2U7aNcXn9UkgThGzea37HB4uuc3JbfBhSzBPeK3qJFwi5M1pTZKe9UdqY6T15Bc9sHn6hPEMc83r",
  "key16": "y6fxiKReUqBkdKiW59bypUnFGv4whiNVjurju5aRHvUwhGYTtaZovZ3NoQLWx816w4bgWo4xrK25PcUkjJphUYR",
  "key17": "h3eUh5qokraECkdMoogLn4X9JzBeVdgJub434WMKQ7obgd3Ksi2ziEYsb5UGeFuzxFWQUWS8zREcPm6HEwaGU3y",
  "key18": "44zmEkVTEcG9jTRX45KBhc4NmeZcfRjpJVZb5ucyVkKf7sf34iCdtQmWWrRZXe8sStvbK9hHA3wQ3eAEUVtPvwa4",
  "key19": "5Z7XVZu6YwPoY6k99jaD4f7YrhM33KLLThcTepcQ7GZJoYzhdcrsYVmM7ujAyaEVtU3EPSZxVRP5bk5pLA5xk4D6",
  "key20": "4ekoLcVoz4ijfhkZmkzybHKZbiCMj1vnbGmgjKigkuR5ffNk1pQf4iHPteK9SjoGjeEdfbcbCPPULuB6gSNd23Cf",
  "key21": "oZWrGzzMszVjnbTdr9Xo7ACRp4FVtgcJ3oGUqDx3kdhL8qaF1byAuJsrekhxk5Rq9cJYSXBAY81pB1FtYJsSZah",
  "key22": "nxALjXXkrysCQYVXGSEnKcQNbwuMdx22QdRABSkJS1Gw9N7ccEAtDtyufmEitdxvSDiWN3mA5jPZbBHweYLwopT",
  "key23": "9XD59R5zTA73Qjy6Jn6j8ASBL8a8gcP3CwE7ZisFKqTNFe6JA5YLXdxDYXdMby7TeoBFsmYn8K1Rw8cMqBGNJc6",
  "key24": "37TmhNZu5cuHJd9Fst3MSJQgUvJhB11dhqB3XiPuhhVnDwyNpQXf5eaFBk2KrNW8nLXPwWFTbxWk1LfPivExq69y",
  "key25": "496EvK2zfnMNffhq7V5m8GtvsmMTcBCmtZjVsMRpHX4E65YGXCc9JTk5x2VBiMoy8J71hE88bfHEgoTioECF7Pfn",
  "key26": "PfiQbv343WzUnxjX8UqctCp5Z3wNAuvyTDrGssxud7s46tuvegoz7VGDi1Af3e4tWRJwa1BChn5gLXkgVjfg2Ve"
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
