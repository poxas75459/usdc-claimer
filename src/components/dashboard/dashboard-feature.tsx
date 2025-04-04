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
    "4PM13eCF8mLA3hJQ3nZ8VxWq2UR7j8rSYqYPTKZWXm2byCrfwxYeyMCw8e7qdBkFnE4LXE77EReu1RCMDveb6mnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3seybdT4AARXdKSU5D3EBJEFyAZq2FSCJUU2CNMWYnB9BUqrDSRFv7Uo6K8DSxeoN389VeFqaKVbEF6uCCAJ7tRS",
  "key1": "rbr3wnKktpdJeD5VUydBwsG14FMwVgNdb1KL1FsTWPHMFqw1e3dSnVqRx37eomy9utZryqhZrUnNy2p8PKHg8Xu",
  "key2": "cAg8T4HKxtQZg3PH9WskAAkczngmuRR5k4XwSo8zNhUovqX9we8ZHd9j6eP6FCSYjW4epSqJX2Gngt4bb9CTLaK",
  "key3": "41dR69JNh2F9vw21zhGSEhNGWww1URWV2LjjA9fVDj888sSzsMg3bnYWSjamYTrSDuFSHTbdKjzyiRcKk8wH8cLF",
  "key4": "5W4inewXNqnsigeE2gaPwGzgKD2eqDJnwVpbRNFxrEk1yPyXq9NTA3JdKhkrbRCbSxr3aTfm2yvugUFDQTGHBEFy",
  "key5": "2zDihEhGg5q1r374CpzkQE38f8GP3yRzwnYLfQRuu8JQ48si4DKS6fvd4F4i6q3gFBeii2kbyVAknvvrRY27v3tK",
  "key6": "5cR3yWcXfxxKpXrStNVb1H7p1PDcnH3LnpDqs2VoS86cZLejWNQX8eJk1Y67Q9thbKLE8HQBPUzzJekjSusXq6Zb",
  "key7": "5GD9h9ay1VeQEgzLe6xgEv76382A7VxyXmDgx3yaV6WmCuFyYx2pMAyU1i2f1gxY5DyGyFaa6JdWGRtLmXN8biHB",
  "key8": "5ivh9V56KfdoJkvyKz5Yvwyz2XHPhyQDq4Uufhapv9d1byqP98iQttzCuZZ2RvB8yk6gjcr59mUtzqnc8shsALYK",
  "key9": "35c7NbykELSuMTUzUjKoZdNq2xu3wroLdNk3AQYpyyUY2WFEmqyqEj23uDfbUqS1GAEbseQkrL1UKT5Z2QuYWYY9",
  "key10": "4jHinKwAsKknQrw2ACAcdPFfq5oUPnL6EwbfB9AXaWWNmJ8SpfPJDGKacjyLAQQsDTieRPKi6uzr2J4bsWWw2C8C",
  "key11": "vbp9KtYv8nmNmPgGpGiYrrHKu5J7WAgx31kv6eziiGeiEiDK6tSkgwiknC7BfaoXX3WwBvatyCWxZsBu9FTzm8T",
  "key12": "5cGfqws3isoFx2d22TJhp81PCZYXEj1rpvu4QQd4K8wLjHUrGod59ZvbEkPXkEuaqsNFPizkrCurQnkFe3bDgo7p",
  "key13": "4vt3p6v2Mso1uMEYoAFuB26aeq2HJQ23AzQXCcSL5wSmh1f3aayqp1fjRMSu8dDhDD4KUWBuKoAMANCeFvEkgwrt",
  "key14": "4gj3r1TNj3phS1VLEkJugTu8n7vH8p5A1ZmMq3afYY7qcsV84bmU6yidsEfgS7oKsmRwMjKqurRb3nypBrCRm8X2",
  "key15": "43u6nfwNgYSAzSKUMcvQvU3RMVEaggta7Bq3EatM1r1DaqQdXb8nHjS4SZtF8aBDiPb87XsfrpG6yg1XbxcMzbe8",
  "key16": "2EL5M2YDTqoWZ4tRJYBtyqcqJsKjyvWdjcnkriQ5uXgN5Ea2bEBRdyon3PCX4vqAH2XNavDZoavfQZpSgdm7kdLX",
  "key17": "5MZUgUTLNhhjfj9BnFVPb76jSnuo6N3SqTDuq7V5EEoe9zGuiTbMY32F8CAUJitK7MnVT6YzrSs9nDZqutcUY8Z5",
  "key18": "3sXQRpAMru3c26VFeytLv2hDdRqbernMcSJLS6kV88hKyhBQkCK7hTYdRiSfPPQeXvnFncnsk68DnH7Bzy6LPpsj",
  "key19": "3URjTaNZ9vrMkUoFrybai7YfDsdUJi1AEY8ofxAey5c5BhRiUVaUnWmL1XtFur9TdXppEL6kj1tGGx42a7BXbAdS",
  "key20": "3EzewhSyaormNtvad93paZN2y16uvaoA7DwFWf9fAYCsJiyQM3uK14mFfd82vkg4iiHbPpup24oPbrYQF7QNZMpe",
  "key21": "3pUn87fjSFb1upmJvZSjEdWJGjr1YYuvmT3JEitF6U3Tc8wcuAQFa9BXiVFFRsTcEsDwGZkJSerDefp6dWHnQbfR",
  "key22": "4vUqpahk1nQC8zSs7dkGE9pPqT9j6ibd7WrMmoX3qMaPPAuF3cbpRZseYGg3NgptRJw48JZic2bV4j7RhFSLwZrE",
  "key23": "91N2MCDAzd9pw2wJjCRjbRm1LaLhAMP4CyMGepbRyn8KksENJKvQ7og5g6opWYVEqdYNKAFXCKY85cRYJrQdCqq",
  "key24": "5wpNCk9kdq2jVp719ZCFnC7hmKp9U1u95qgR8EC2fruk4L8YuPRkskM3ozDbh3SyjN98KAGY2oRLXgDFctudRDLh",
  "key25": "GhCW6T5ay62RqHPBmkUm1muFci1BryztY3WbXj78ijXZ1hbRseWexAa6Jq3twso8wWgHUG7jEQKYnQmzgJN6JxE",
  "key26": "3vnFbkvQPcda6Yw1d8CaQHgM8p2hC6P7LWRthohFajJFzBUTktFCmTTPhHzZRQTjyiLgX6ibcVMkWEhFmfWoeUQ5",
  "key27": "4bqwurt7it1CD8ZP8zLgQ3tf21e5GZXBYMMnNi6e6fdT4xV9iM8zQR5gePk3dtak1i3bomWxxph1tTZvDcPQcVw3",
  "key28": "4FU1yhEho1cLpR6GazcjcyAYpm3faZPedfoTNyzButx7EJBJDZMLHAbn5TRatMj7w6sGKe6afJL5phSfuSoG28Nd",
  "key29": "59p3StzSxR13vgoWJmjgCMing8oQTs4gk7oMxFGY8t9XYecgSMxpKXFXieVngz2MksWA1LEtQ8ou685dqh6bn7RX",
  "key30": "2wgswG8vFgRMwQLC8RrqpKf7bSA26ss64AzvxSfHUt6Tzd4NN5HaYZaSUgHH2wKyLbXBPGJM3Km32SshuN7robTz",
  "key31": "3a2N7jvbNApWQCdB3cnw1ZNRnPb3KUZSoTMYq5bj3a2gAuMWFPYZU69Be6bRogCT2eVtPf7iJGTyBhikodVEzNZd",
  "key32": "reJVxRfDEoCDvwTGrrqCzV8UbkcZduXwgGePYc9yZn4VLiks3W4UW3oPGiGfnLHxAtq2bw7CmKf4amCny7Vig5D",
  "key33": "497v2RX8upeqKVhewwzJTYwR6H9jA22bBvZAEsYecvTtWSTmus4qXMrU9PFDzRi4hedz9C66VhQaGzA3rxpjnSvc",
  "key34": "5hSEEygRNYAj5JToKn1onGqhLfCauB4g1v7VgcDCVaFVL1qSxT2uZH1LPeF9pRpwV4J7F7HREqpsp4Jh8xqGDQx9",
  "key35": "4ymeKnCJdrG5uVG1UZm89DF9hFVxgJcvA1xKz4sWRxz4iMSe3mDocCGCy2YQTChj1AB8Mza2gEgRAfa1VLdTeD7x",
  "key36": "4anNos3Ec3PZcpdo2XDgP8UxDmAJJxTaf5zbt3BgvwrugkBqRDauofiUuEKjkyV1wUAQjk4yhQRSXiK2Fxsf6RaR",
  "key37": "2sM7y3Jedt9g1WMPQA6f7CSsNjPLS6ihDnCNfekT9JAfmRVwCuEApdkwSQ6pqa8kPEKogJi7DZZAP3dJVQw1hM1W",
  "key38": "3g1F1tXc4ihY88vFp2LHRhLnKiMAcymbtdty7ujpkKYb9qs3HdD1tc8LGWCeSSEfSLi2HJpdrcjQde1rqi1j8SVA",
  "key39": "2z8MauwNcwjeTa18Y9Qjd1exGky4GzVf8EcGETFP7hYmy3wQpAKq4H5upjtQnSGezbFmHocaUT1AhHG9EdReBbTT",
  "key40": "5DGjaZMqy51nuFSbMHW4SguZo8NnUc5Jqg4xyRiHshwYRj6b1TSKjMPFukNRXj3ZGuXian4n1ofQHrEVZMT8aGPK",
  "key41": "5KWLLaAGB16kEzWqRo78RHxb9ZNTdULtqhoFGZhuR1egKpkAB1VMxNjLN45jM9i95g5zMd94HYSNhVZWu7uM4cB6",
  "key42": "3ZC31DMQffXuyGzM6qNKGb6vNretnPuvMnhDwXPNaVtGYsJ5AVWgmw7k1uPM72yhVeuGBDWVB8bZ5YiHNTqjRdf1",
  "key43": "pPAMR86nfw3dh3DaBr84w5yiXD5V5VsSbUxyNxKoW8KpTxumqBTSGySKKtv6vJAUo7HMiVsM2wV6on4Z1RVEPuy",
  "key44": "2o2cpWEJaJ5HBAT4EVjVwNnaBbW9rJemq213ok9FTpJgDTmjzk7Adx3BBVPGUqR4sZZdUWNRerzfqgR1hX3ngL6E",
  "key45": "2aXycbWk8yEXLdWNjsbuJLLpYXcob3EM1M9a8UjT3A9zXcp74Bk3uBxpy3WngBBnPrW7HkxP8DNwqrmsKtRomviM"
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
