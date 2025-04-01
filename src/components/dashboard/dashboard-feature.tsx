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
    "51K4zFTvQVfTjnFn24JdsqbtukUQ2RRtuzpZR3z16YcPpeqX4UQf9MfPkEDBfF5gp8fCsAa3TYSpG6VQAAy6qpkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zMfWWsYrNiyWeLxa9WT8EnqusoRHw7f1Rf5XDSR9C1Bo8YmYpWkqTDQFhe1hZHwKqQyMMRSCvL1JvHNfADFcJc3",
  "key1": "3ZWLcmYwPrgRcpJLBphLBoKHrz5QKvjzZ1aSEYZZxuKkqP7YUrNGtLXWttYDZtsGm4QzxRWUYjyy5R2z59EoQUkH",
  "key2": "2hWs4sXEhrBF3Wbn9cTXCPgMvfN7sog4x76TAkV6VgYZ4ewvGdZrUdazb3Rb8x64QSXouNti5CFAzzTzK5Gyq5e",
  "key3": "64epafHWqMZfG4Up23WM8XXJyUoEzV7keSScTaD4Nh3bLBx5UoooSTsKuJ2ADEvoFRRQqE8S3nr8NbgRbX6jjEr9",
  "key4": "244oPfdZrN6Qb7K3ddzYnnG87uRKadtrxJ1SCRSarfa4ZM6BuARkSCeh4AkceC5BQrQgkttJ72ywxwZF7yoJAumX",
  "key5": "31trAHpGx2SLEPqN1beBmmSq9PkdDoc5wH9xbrZufbGTMAGQWf4jvnq1ajWGR7tNng5rR7UGsTVg6VQrE4642M9n",
  "key6": "iWmVfp9cibEtZpGzxr4x67j9ssmF1fcnuBMWvueuK6NXgauvYXzGpQhva97G55q22hsyAkftBrBdybbuBz2DLst",
  "key7": "5Bx2kQpvTxzs7A2Rq9SUunANN6rcmgavTFGcJE3PxigzKGQUz2fB7HFRsGcaNCbDzSiTsXGfodmBvLWb3NrAJKyo",
  "key8": "4WToTL4Cte9aySiqXn5LKjkSkdYV4KW4F1P5cxzUHcouE983ybxmSH5SyBW3cicwwmrgB1j6MGzwq7nq6n1YHGMT",
  "key9": "2jtRYEAdMGer9tv14481pFwLQP1VxfA48cHrkqs5zH4edB2FSLfYkk3CmdeeN2AqxnvoPyhzKEj47XPTMKCqWurK",
  "key10": "4a3bNnGriJhAEkGMR8aoSuvAb6rJxWWqhne6UHgoMkPXWH8uvMLvUt25o51neUdSeMTV1px17VVBuyxifEQuM3U6",
  "key11": "51hMLLnu2VCpXuyc377Zvong4umBagDVZZpVokZ3Cdc17TEdWUk6qFgYK38duZkDMawjbmjDENBCGfZZVpXay8ts",
  "key12": "5GzCnTxXmh1MLaX8Z6g3Tof9X5otNcf1jR19QeBRquUP1FC4QchxGaz1zCSWM8KnfREGZBQQVcbprsTmA2cJBkGL",
  "key13": "3hbBezcvHFT1m5LtDcN3FcjMxN8uxvnHkkfoKYCsic4yhxPAcJjytQ5takMT1ZUfpU9KhLR713aMPyP9sbHxJoG6",
  "key14": "38o79bBPAv64EnKrkKX9AYS3wMYnZfvqg9hvpUjqPck9J8MWgMa2XXoEFUUPfB5Vn4ubmKg5FZKEP9HZdjYzn1sa",
  "key15": "pi3wMHDVynDfvCNoR823o2MY4ymtjQTx2Ltf7mQm5UbNyTsC5qDbf1hQLRMrRupcYk9ykbJnDj7HtESY1dNZyyN",
  "key16": "5EpJc6CJAT7WazeiygjDFdA27vdHPVW1kpxdTpVKaHb4EozuisBwgbUxbucvJ1Z3udiZyQoY7ksH85ZZdFwNH5Ri",
  "key17": "2jVynUzMjmgKVRLukqPcRcxQZhRyp7uWGMRkxWsD3sLdc4oUgfgyorgwf3Y2EEDbLwG42CmndXv8RVMqsKpb2fW9",
  "key18": "4NTFKgZ6Bxip1f7uH3TwCTgdWamzFFd2J5hHSG5fHTdTLQYUDTU7APpEnvPfLv4PjLpk6dmihCaoHammVsbWqpSo",
  "key19": "3JE4Gjcs2QEnrqGLHZLxHixgv5H8n7kTS8cPKQmq9xzyUAfrCPxY55BoDmKcd9z1iy7yVbqTWB1bLQix5f5rQLiY",
  "key20": "i7dVFeBTRDNjtnBWDJHvoqEg8jcpdFkzM5XxZGe6gBJ3p4VbfkTXRtzn1upeH2TqsNPqp6ZM6Zrx1osFoWFHdCo",
  "key21": "3Zvu1oyMucoR9jvUed3YhUaNKMPeBtamDtARHPEBmBgWLsGH7gKDTnEbkLXT3Bwy3m8qjQLa1mDUGKfJr3AfNTka",
  "key22": "56Nfs1XFUuBYEbpzmL5ekC6c2bL7j7o1hYz8JeYKH3KhhkXXWa5PzNmdbyyGzLAueifrSr4SjCNhFCUzzEzJJ7ow",
  "key23": "4t8b4Wb837axUnXFZYfzJdbwFYavcSaKCr4tp1QoWWGJpcNzuvh9KHJFkb5SCA1iG18NhcUrosq8HiKHWnyQoFKw",
  "key24": "5TDNcwpDQU9dtyedBn8JoWBWPKePsLajBd7zqPXFJjw8QVrTzEiJNQ4rAVXtsYvxox61fWKU1SbhyawKgU2itARU",
  "key25": "3R8uTgw8VnFptpXMP47DRDja2DDND796rq4jqWDuzkEyycj46egR4ZmVN4GrATZiEPzYqDvc8PyeCLNe6UhydRZG",
  "key26": "282RKznxLRx3LPWTqYtHTZKP61ifuYRxVAbpNAMacTgewN6FFKSg2611cpthQCJwNbmELSCRqY9JFkH3R21TfuNT",
  "key27": "2xXXvkRRGVYCbtL8HqQnibwcFz2XvDJB34QGpLgNpAzBUTUpftcdAcHweFHSG4mbrbCZ5Svn3u2tqjnrfS9HGk7R",
  "key28": "2QQBptkkWW1asWXkCkpB4Yp6DUoHVWkQ2khoZEvmCfkXf6vhmnoSREqaSXCDyQoB4eKUDu3nRphyAgUuA9E1mnJ7",
  "key29": "4mtWS6Koxd33NztbcTRDjpSvZRQgm7pq3UwTFoKcDrXfxmfkY6H4gbKex1AwsSfbqF2cc54Jdp7vNksspXMg1bGU",
  "key30": "2XnEn3jKLEJjHD8vS98Gscguj31KuHbBhE9yza8mjKFsffpLpdVezFUfboz3NFiP4oSbkSDDqVQdQ7B9Put1Q9LU",
  "key31": "5VRW5eLwP2PR4MFWmjJiaZDBHxruDSvECdf5BQFvBXBRnDZfL1SAazthpjH5Wi5CdR8xYbEMpXVnfzWFKGbxP186",
  "key32": "Ga2Nb8sSRcvmam8EYkYmwmKMugNyPdqGBYkkQ9Ad64pa5LrTsCCijgpEst5aumxBjLj6LKg9pmokgCy76g3hnrC",
  "key33": "2MwVzPm4wtG2g4ozzrufHKxfVxmM2WUGrrVu1es2H6UZpEPogWSE6YtFiLtt75qVH7AGr13HQjsvdTkrJEaLrFft",
  "key34": "mghTMycZVwuYB1CoXRgiL8rkwYY8NyvU66W3xdE9sJGFHnQnPe4tVqYH7vM88CyeqYWo4emmfyDgJozcf5jSCXS",
  "key35": "qFLLncaQ73yFQpQnUhFv1j4RbBQyEUzbKVgmSjS6Mh7xVBMjXUBzAdqmGGQ4rswB16Ainh1AP2jqtKiihYMHEUa",
  "key36": "2RKe7mPjAwuyECXmm83AKHyeWW45mdaANdkZ2ATdbkSatF1tMFWQsPqfgEbzdmXc2MHvaNkqacuFC7CnttYmHKsU",
  "key37": "37EuFUxXwtpUYixoAN8GFkXv4qrNAqspAjXMetaEiYvgfdV8CfczbPNKJRDVvmcMfQnJJ47RoadXejMpfBpBhKCx",
  "key38": "2T4BCXsGNMg6P18MxxdarfV5TghUPocbeCjtunUKsfjEe3MNsq52ibzp53dj6cpCpjUKMNDWSF9dyJocSn1h1SsK",
  "key39": "48rz2JvpEhfLb6sUpKqhXpskMCB96QQ6GJiGgSwLe2ZPrA6guYB9KeD3FWn7ScftQZp3P8ttTmDifApyJva4sf5C",
  "key40": "35a3WbAHjxpUqbf1Q5uWu1rZfj4YA2Uc4Xe9j5LE93fhgLDUSsjvVgHZv7GpsajruMbydwXbV61KuKd4ATqaKZ94",
  "key41": "FSPCc1m1fQ9QrPsc2xVMVh53rkypyu56FBR4McqUGPWMve6n1AUEAeWAqGABYjWxCVDY7RvnKCqhRWDb3u6TGbB",
  "key42": "3rupbgEjrKYTVyRbyQmyy9oHcGpvF1pPvrtKiYRyWz42AshrFTWt5dmDrGzVoikkW8jvKELhEtmhG8sCFnQ99sL6",
  "key43": "3ZPamMXpNVfgnHs1rZzutGiufDAZXFXsJMiiuf1SmtA4AL6QaXSM1t5p21JPFLv5wm1TDK3WR6kDBAg5AFzCzfqQ",
  "key44": "2L9ggFh9RWNqRqT3V8Kti7DVMizrVywSRhohiEymLmVMwmRzJ8sDngnYi27dphcLKj8HaYfGv89ymWVAFTjo7oXL",
  "key45": "2sGXo7PmMy4UG4fwGxZMPLy61Ljv1ueLtSNq65F9TUVyYphqh7RLwuJfm3dW6e4pagmXkZReHUpCCWNujw63HTFc"
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
