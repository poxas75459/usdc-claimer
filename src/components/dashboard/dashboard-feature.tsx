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
    "LXvULL8RGgKXYyWaMxg17Uy6UJRMsheULbtkmqdqLUgF9PE8kCWzQNwGgHCdtryopAEn6sGjEmh9qkjSYJ5NEcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t8aCt7YSEp4QbKkDDJcQzUQtAb6Wgf4MvngxW4fKJnkePXSFBYJaZUiPWGaXNoRi2N37tjnmGcS4Z8wR56mhYEd",
  "key1": "q4YDkD54KApB5dj5BusXAfeE5HAW4SDWo8p46D8zjeDVriErSADyeuULC5wVqbg6S7uPptAZHkzTwQ77UbR9aAJ",
  "key2": "4qUgc51283L3EjZsVYBMCxRRZQWbTEoKjtBDNDivhTyKmQiat6mYbugz8nhYK5ZxgEwn3xmrrR4RwFC5nhmLC2te",
  "key3": "2EAHYY7nVQnhmspsBbCNQnhc5G2ubxfMLDDTamm7ck7BM2VmRg5PjK15uTChCr8tY5cnncbFTC3qVe3zscXHcHws",
  "key4": "3kBo6rvSTT8HvhCqBx5ZWy6foPNHytV2LhANwBuEacBrhuKdkyADMpsA6bkmqYxCKqDL3yCiKbJ7v2vo2KpRx4KR",
  "key5": "3ztnaxmJ7ou45DXxbQacLDBsWvsng1tpSwKP1933tfStgXFWPyXREwEgoFLnNvK4U2eZRb1TVSqAVa7PAwg3yzvD",
  "key6": "2JkH29ryCE414PzAC4bhE8NoudhTHzaUv2H5aqybaaEtcc2qxF3ooDzuZ7tJR3Ff8ynjAvTae6teoXhzbqb4by3M",
  "key7": "5Y4rsh5u8LQWwqNGdVV96ZGuGNt7dGUk5t45hHvZRfmpN82gQxBvrDuKxNXcVALMfRPVstasBFCrFTtjeGYbQpi9",
  "key8": "2hhoN6xWbtLK2VHdPjYbqs9vTtwE7HvvpkXcgjjqT6YG2LsYCwvbpKFmzvn59iUFpTwrGYdcobCn8kMQsteZEbgF",
  "key9": "5DNGXjFZcc6WK3Pik6yyeCtv5gr94oqQ339pfPtjiP68SxJbUTC9JSHT5pJU8CyZprWEdTdRHKoNMNyneECkR7s9",
  "key10": "xWCaWqpVPEd5hjQqvfSdDJw71B3aXfgDKcwtX8xAeLndXpX6YaY34LdcM1RUpb38bpf1kPWU6xd2jvgqvVkvBAT",
  "key11": "2vnEJtZu4hpXijWGxXzF85BHKdvqmJWVzfrZWhMRPz8Jjp4mRYW2Z1tWpqSQ6RBzz714mMnxoAJaDkK9D9e8m12e",
  "key12": "ZM32gtXsFNVyae9bPYHFfc4pLs93wgPBGoyT4CGrVakxpythka3aRBMC5hq48UCS9fhPXTDdAYJG8Qc9XwmAr7f",
  "key13": "34u5ncE2mecF5RTkTxYZv2R2NAmDE1NME6EHfBQx6tkKqJ86HXupG7JMVPL23hVFAcA4pfbg6YHgmdbTMBEfKBVL",
  "key14": "4bg9XC4PMuQnW2LH9i4p2USbnF2dSgqNgZ2GLcHu5VfSKFE5NrYK8CDSLarnkb5kmEHEwGxL6P86yBXAPF7g7eqs",
  "key15": "2tmdQAKtbiEY5MfbefN5nTHo471ZCv3gYpVb2xRDXybosX6kUVhLUS9S8nc5i1v8XNQa71c3pyAQGyz6oijJmkNH",
  "key16": "23qZXqyZFmyAPrgmqCRbFjVusqcH1S44ix1tcAvRw6iBfTsqBRxM15bEHbqGLdWAZwkzZJe639gKXYVsb7ia7HPN",
  "key17": "5C2d681cnC9SLpvxXpNPmBPyXmwscjMS71jfZgtRRTY9ezhnqEuNFTPSS21xwiXTfbMz9KkUTvosPjhyH3f6v9TX",
  "key18": "44ipRhmLrjkvtxxYJP3BpYpi2ve76e1GQPnh87Tf5rz1LpQg9bM1MDxFNR3NWbvMyNSqsVhf6MREwRm7U2XoqivA",
  "key19": "V7k1HGwsAP13YSDRw2gDmp7tLEqbxLPKqwf1Hs8gNyc1BsGAX53b4kiYa1pBVhoxzDjLuLbWJgpqC6mU82g8p3F",
  "key20": "34xj3jCBwPUHjoxvNEaHGTRHqGPYhx7mLUB8CiRTh5Feo25FLFGFyxq9LoLD1GuQ76G8qVpsPF8rUeptT4fYmfUi",
  "key21": "MdJ9js1xtPPjhAXfHc8R1G3dk5p5dzFYtAmtVTNkojKhXMtueVFUZMe46k8Yu2zaj9anRijMgJJmYvsC9MvAM54",
  "key22": "3Q5ebN2WYrsYg9TqkFy61u981yiV3KzN561zGooDoaqKCPtP16JgrUeEKHLJdwfJ91BAz3ixd6kgQ764CtqFLqPw",
  "key23": "2D6YM2JV8Tj3jvKiRuXm4gXbtCfTz3pRK8Ysx5AXGqXnYDkXQmZdSrzfnmAP8ZVPS7zoAFxCefxUQmhsSbS7ABig",
  "key24": "3xEzuJMUu2ym31Qn8qHKBpWx6VYWnyFrf6x7m4GRA1UzgHc3h1VSHsurqJ58RiKtg3TWA8nfv6f6uX1HyucvjuDp",
  "key25": "392pT4fBq32PNL3RVwSng1dUY15ZQ86QgvSpBAXiSHTz5o3GZ5rnX6SsmPsJdnJLsuau7W4uLrSVmgn7YHgEGVYa",
  "key26": "4WtxB1RPNFwip19EBt3vtRjqACAn27H2xV3m6ySmXuMGUKb1phTLVKEMR3VMcTMU3UQm6D4Qa84DqrZSKSGi5qMr",
  "key27": "Zukc1WGd6S3uuogmjcQVofdHPqgZmf1kVEFm5YLdNmffz7mcpcEnXrMHYaY7gejXGE46aoiRRMsY5vgr9LuY6yf",
  "key28": "2QsMcZ3KJjzu1yTwAufZDf71jW7xacXygHbVPDdtsiMf6ba9gAELZGtvR5YyH1TNyHcPNhWghiyQhvhqMw7r2XYj",
  "key29": "3x5NQj8N7DcckuAkvgfsHR29T6eRFWPYhGK6NjiFVjRkqpCQLprdhtxX1VbPRXAZ4d6kdCBSwpcP7RLVn47MiNuF",
  "key30": "3La11iphb5YkVhN4jXmjmZpNx8s8uPaN7YE57ZSyAj8FtZpqqcoMtox2rsqYU34hJNZeCLYJvqYTT4QnriVsQHe9",
  "key31": "52tFTXmcNXgNW4UbtWDc6g3WaTA6fToTC9V92WqDrka2MUuPb3zsPrHuJnkZ1RVKF9hzxrcAAY1EbwGU9Ksc1mnG",
  "key32": "3qrcGZSp2Y7QTbCmd1dGsdFFdEiiuTgJFhdwVTqhyJ5uGQ5CNdvgqbyiYMW7rCSPbr7jTWCkvYW5RHMv76h96rSZ"
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
