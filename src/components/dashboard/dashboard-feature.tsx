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
    "5Zn8qUcbtDu3KySLZB8codpy2Gn3i9seTTe6ZjmzNh8VdjPCwS2bAyegCoF4KFhUEjX7HvguyFJLiqWwtE6EC2M3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RzQQb2S12wsnwX5UEGQBpAxLux4haaFmN3jkPD3BENgeKHKQoCya3qmHtwUeCwchzCQuHioJu58BDhMCMWXTpEr",
  "key1": "4DgE6zKHffyvBRtdTDVzQ1irnjRYqq9DQDeHh4Jg4TCXPq7QFfypdJvLonbhVQg2BJ8zEmUDfTxAr5GYpYMmfVqe",
  "key2": "2PytbEgikCN4ajxwKH15oW93ZZ7WiHREjn3vM8nCXCNDFi6JGVivhXUAt4WJsyzQQ3hqnk26793YNA3nf4JTUXji",
  "key3": "23KKh6oiGX8QyEfjeVWMfswFv2op3T1ip2LumfSqdvbdpPEcWhKLTdwHpbFtFRqSANMu4DPwRhqg4wNN8b8LsZHY",
  "key4": "ZVt8zE2zww94xC1LBwhoMejzdjzGejG7MCNuNwofs9N5t33TVrazSr3STYYJoP2VTqPFaF5HhbLpyiiFx4B5JD9",
  "key5": "9qVY4dc7uc7x7iugUSDUMdioNdr42K3Lpsp6Z5fwab2APXa9kQHrjZJ5tSE4EbhMr1p3371jVoz22mnk1ReJQc2",
  "key6": "4J4584diqTj6xTE2oDvCb8gwKr4b4mCJLUQXQK2XgpSHWizQpLAB6MPiMEHRp6552RCqzFgjZ6F4QaZazarF4bad",
  "key7": "5YV3YfUVnXrAeAyAoup2PnnZuJiCapDKr7QT6CXWwuvRPjq6xEWovnYDwZJ9mvoJ1C7nmyVeZWBGb6LfKWnG9VyE",
  "key8": "zNVzZXZv3agTePFYqPe9J3syTj7TBsxQURymiwivc6GLZxSWVKTyfeUMzQ5m1maJ9kd6AVsiJWAqRkg3MJ8tyDE",
  "key9": "5oGngohTUV5BEN73LaGZZBpNZ2Dsq1N5obuJ4saBCfM2spgguPhZKBz6rntdNW1o64wydY5MdsV939aV5ebtqxcf",
  "key10": "3fDDfqrW48N96Atn9H7nExWtHvTfTqz4JgPJKnWaJvB34goNrmxwh2tK741RRiGdcBjVEoshcR9PZWYkSg6qTTzt",
  "key11": "48QKQVA6bv8Y5VZJyvM3sc9vCxmKY7jVeJ4C7sUhrZ1G2BJeBA3cHgVxsdv71NvLxRMzWk556JNoQ5u6jE3bbBuG",
  "key12": "JsJ2SRvhm8gnr2d18k7hJRx5zh7MMY6ooGZmzaWa2fEYwAT4YLQR7kxLtcndg6zmK36xS9YEwNB2DCnNwTrcDZk",
  "key13": "3ZE4gVvfju9hBQ3V3pV5fm1PrtBbiCk2i2zZDEAKTV2MvkDSkgchDndCSa6hhhEUF1B8bMm3cbnATDueSSkyrhi",
  "key14": "3yojq5TRynsJQm1b1XEy6BCTLYT73JGbTxkDvVceuR8DTtSTFpVmiG98Pwv1mpAJVRDqLktoH29LvrjLFcuHzkAM",
  "key15": "5j8HF6dZwfGqDcLwE37c5zsPeSvQizAhrGVMSfERRoVr381npfny6tpssvif33cBBgioNmMkDCt6W1ftTHgc3nZf",
  "key16": "5rUvNAADB58YsoWHKnqiGd6iFG5Zf24gQK6wdM7tHhQAA1yWPvCtzQmeZCWPv9UVMZK6HBhFmsVggS8a7mKXCzq3",
  "key17": "5kuzBcxYpzqe7fRm7r66hGwjjeVB1TMCtsHpywo4WFrUAu29saR3zTx2Usv4ycJZc95uvGCL9XWJiFUcxzKSkgRL",
  "key18": "5sVQDbkoxg4CQcaydSFk5hEm98eRnvQyW484KBpavL8bsCSetdnXmFJABBqStCvGQqzfMqEzFHbudKZbFfteuWDf",
  "key19": "5gMm4i82mauoxeuki7wM9VqPDPqRb6JFsY4MWVSvgxKnCVft3v45K3tftceUbTpZWQRE2QYTUfxcZtWntGKDekT6",
  "key20": "5KJ5fE4x6XQMfWESubA7KGFC4y14L5tBjhZVcxWLo9YXMWoE3MGgj6F4MRDaqQNuATMmVQn8TpYc5PbZ5wWYvL9Y",
  "key21": "3DyhSsBSddTGLonz8E1v2PrxeCZrEfQEw9PnrpVcXNBZUnnAfEqTbzuUF6J3kfGLgE8DrwpZxymQkhtuj7kKJmXv",
  "key22": "4GafX1NAt189v8t9uWv7binHvJHb5E6h9v3oD3RRCN8fR71qC43zKNRf2UQ35XrLKskTCq4ihqzt3nH55E4Qwhsz",
  "key23": "U6Eo3nRxkvoJc9viMjTe4XnubpGsvzF9noMQu5WVv4ca7SzzZ5cGt9AHHM399q46YFZH1hKc3coATXyxWJuY7Ua",
  "key24": "TWL3zsATYk7dr8swunPezkekQrV8UKhdkLc3eTpNJYJ6zShXGVcwAi77io3evVHjbaWBUJfeBGFzwwavfig2c2E",
  "key25": "2Cptqk2ERgXa147UVDKqhDHwGg2jhgERkwBjSWGTxzP3Xhw7b5s6guPU2eRrVZikKBqpH5XMPpySy4C28iJ9uEJz",
  "key26": "2iRcZ9jgDb6wSM85CPKxFFkS2nYQG5XJtmoBE5BPCBGVh4h9uvZdKkp4ghksv9Zsn4a7UwkNkRqvW51Ep8TMSPt4",
  "key27": "5PbyV9w46tWLc76Zvjgibwih3psdnyq8HptNKKCuiTknwDbgQy1XKywNPFRzxcfNFE7TwMRaVK35kNEVaoQ1yHbk",
  "key28": "3rc7x1QmY1RLXCz14aJQuu1Q6fXUEdEYC1mhnZm4WrcDo5EMibaHDbttkLbzcrbSkjGr7DTuA4PHUL3B185k4msQ",
  "key29": "3cwfXme8dftm38Sf7VkmvZVgfHm9G5tj65AQ5kZpUP4P778dGrM86diCEk1RLtTCEaV5dHyZWH9psj9hhjnZQXap",
  "key30": "5X1CPcwT5gehypE355cd49cmLb2SPgXvDKN2zjrGdgnkVn7VBTH2Zn4FLzvCKaMi1ZhuS3pCrJwehxxJPxM6LsUk",
  "key31": "3iXdCVjekDokDi2PdisEWmCBiGxAsBadUcQHp3wMf4M58H3VwD7yhXCaYdJUaR2Hgg53JhxGebfNrcdFUDKqSz1q",
  "key32": "4pKWNjwwFaLZsWiQioCr5tFXJLvNKZuruip8dwLjUbwpRbBDWCfSdKzx7GnSqGVsSyPbibQvfHzwcUtaeApHBQLU",
  "key33": "hktGatmSt4PTSDYHBL6Jkk5mu1HPd43CkNujix8Je3yTB1HXmBn3hxiRsjrnzZbXuayMBBxfAoqPvGtoVwcF2ce"
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
