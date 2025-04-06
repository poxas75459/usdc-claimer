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
    "51XD4bQmnf56RoR7Uwq5CBTa9JCtUcDWDV8NZXq1Awp7HU4N5Wc4J7hSHKyLFThtboaVqWEScyESRujK1RJQg4qb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29kzPJfDuEkfZNewTTKiTLtbsTWtumd5sHFBUK9D22qdL5S4MPG6kemuNzAaLYy3CWB3XHNJx2vKubnbGtMrbUof",
  "key1": "5PEnNsATToGQHFC52PVx3K7czkwcapqGQcsFKS6r75EtSN5VD4UL52nN9xAHMpLe1gutK9Jk5uDdshHuZbNERRUy",
  "key2": "2a1jWuKzwy6dk4egRNv9Z93aBDpPbYMBjnyRXLnkhjhK4WqLGCHiVNrXG2tWddnUY2YF86cCSYNDCWzkTPuDXWcr",
  "key3": "5QmkXnKEUb2v4TNgjxyRMPuoKaNBJWFr6GSjsyNa1cyTmg88Mqnf94GwCqcWwPWU2stBnP6uMhXgMPZzFoJHRnVd",
  "key4": "2nPbX42HfUrxKD1hQGricXaZLYQXcTFNGhBq7JomC2q4kpUXvxQ1rgFWoJdpYFpqB2wWDmw5E4N1SmNFUemkGWsi",
  "key5": "2nPdLZsQpcuUJaqPnMdHk9EUPshcVpND5URAHxtzGBka57gYAHMfJGD92FPYeLv9aMxwTFe42evgUjSFB2HjVFbv",
  "key6": "3nhk5AFqx1YqVznZCJK9sTRPtHgQuW7dpZuM9RqmwESeAECX5vWFhdeeGzVwffnWXdnkrR8kXUWnVLhynzCFipkZ",
  "key7": "36Y42UNPZV1RoTEZHA9ySuRxrnz1LxEGiEK2YJCxsgXGS4MvyBGwiZMUa9REYMs5stQZhiQiuia7iNMskmbXuzDU",
  "key8": "2mHy5j4uNzMSmskiJBwuCTJDu7WMB2Gp8Qxj73uUA9XXJ99FDHEsS8YsMDZq7JLWeKzzBVGcHLc2ycghKCxPiiyT",
  "key9": "39rZ12ptJyAzVSNE73ND5J2eiCc7AsThpx3WjUk6fwNPFuAUGNocWGa7xJWx9kgeS1P3M5r9nNNu71qjHJDNNvVc",
  "key10": "2X5FZXUTdpyWmA2ab1QScb3smQVA29S55oxaUZNJGVY2RScbvf5bFq9aquxbRF8AG9xuwvHCvFF2mWZDCU6PgKKb",
  "key11": "4DcWAPZX4YenKTersuP1zXTcbF5VteM5WSecUwNz45Hte46Gjtd7AvuC1VP9VtdUYiFes8xQpU2gxCNALDD5udkH",
  "key12": "4SALy1Utow7T9q84nSzJzrLDAz2e1h1LGiNVAv9un2ELeTMMjKZxMbbe4hQ2RVi369RpDHm18GzbK5CDGFLptcBr",
  "key13": "4A5ph3iVoEBQPGc8KX6Tokvhef7HTkmzpZbW7TZ4FtVbvtZeRjJiXHxNhdmGWU1PYhQTuTtWTsN1Nkcjh7iQj3gX",
  "key14": "3LHhEDES8Xu7AHUcKZvZFR5GD2XskY2nVZV8Biqvg4wYom73XfSffkbXJKbLwrZ11LcXw4sUsznx8hwQTJT7JTY5",
  "key15": "4MZySq5vZv3aixTF7SQucPy7NHHzXqyFsZTCqmALQqSUP8WZi6p8DVmgxb3PUp7WvHhReoFWGqfg6NyywczL9DzB",
  "key16": "4NHH9h551f7wiAuK76U1w2YP8zGrrtrtnieYXadTnzsiKNf6QPmdaDGiu6vEUxxKCezevGJbrMgzoB6CcmKsSrTd",
  "key17": "2E7tVAWqmkQny94b6Nscb5YbRFGEzgRq38dgYWFS4x1RfCgAmKDc3tYjGvKaGNQoooEFGbXeH9zsH2iBufXZa6DL",
  "key18": "4v2xUA4A6gzDR4cJuze1a4JReHhwLumejAJSqeCvW9fKLCGdadtKjAzonMynbX5bbx7BL6ceMKearozMadAjCsTm",
  "key19": "4tSZjrtXGN2bedYLYbsEfz7NtK4TfHKBJfHb2iJospDEGbg8J2xDC3oeyLX8bf6Rr5ATRdxytwGbYz6yoVPN4DbG",
  "key20": "3KP1SVMFtfg4nYrZ46rEmgm9fTbhxMRc8ZQaTCc5C4zd3ijBEK5TQuPC2iKbiPc8dJZE6bG9a4B3KBuH8poB9dkr",
  "key21": "q6ycK9AC5atyoDjNRoqrsMSgEWSnwQ4SstL816wo64LdtaatYrvLS74QMJ6Gg67LMeKR59j4h6SzCvQvvuzzTth",
  "key22": "3j4UBenqRMgBvLW3vzJciDm4CpZKzrV4D4jjmobbijNbxzQpdxP9wYq4U7S5ePJqd6iCZajcgAozVobvn91Yk5Lu",
  "key23": "2K1HuQ9otoku5oSofLAbzYE7BRW12jTRa3vaGxqbuW9oL2wXf6PYH6bqHNg4QjjYQuWQvuLkkN6PnHE8ztx8NPLu",
  "key24": "5b8nUcavPirUsW4tSPE5y9yB9WFmHNv4E97hHU22aZniU6nHXkpt9DfiLrrN7Z7wbBZgrgvm2JaaZAHyesNPhwHM",
  "key25": "3TTimC83D2cJjRzojqHZZKeBXM9sLFCfK7gYYtKvbm54uyHtYCLX2gkPwm5cYwxsxSK8ttKnNjGtbDJ8NicakGHy",
  "key26": "hEUCdKhav7TXHPhRbcGBbg8AyrAGktEq2AWqrjMJJUMGayVv6mBRJBsxNxuQPbLkKeKP22jR6AMxVv1ncmmcetA",
  "key27": "Uc7u2TLZj8atwtXYonj84kjHjkWRGoe3keSsqrhNYrQtZ7qWL4rfCfZsxP4MXLJGbqZ65f9fTPF39ijzkjgUbgY",
  "key28": "3p654sr61AJoEWrjrNDHZ997tey2qrSsZc52x9T8QKATntMAMmDju5LKhcVPn6D3LPv1dFjfxvFawYwScEnAtysq"
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
