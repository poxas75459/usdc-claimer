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
    "2SRRhf7FMEJM66aGhmcTjnEUv7hSgTjnQsTnn22GRgE9uHqgLmmgWHquETDgFQgjnYRp56xuAka5hkdpzPooo9uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Gdq1fXU5jQgGz9t2xa2RNLumNSw8qauaGUu11fUToUyArWpsyZXNZ2UQJw8mLmqmurNrbHNrxFsVBw6nqBwdZk",
  "key1": "CkB2J1WthYtuHnXGHr3LHjitNiGGkFxq1DQLP15rTgu2166RzppKEjHpW9i3YBbbXQM7gUFrMJUuJPQ9tH6gs8A",
  "key2": "3fdT1B728psYkDdMPKE8FxcZ9CXGVcroH1eFpp4eWEumBDgqEHL7q3j4ugYTDSGjq2s7icRXxSGCB8ShhpbfMPYG",
  "key3": "3D3W8FbwfyQ6sXXW8erzT3vVhcpQzUAvTmkQ91e7sy9ZFzsAZnsXRdT4Qh4KXNpnzZJ6M4pn6qjhbGCkT9gMutdB",
  "key4": "4aXF74Zu4mGEp6d6XTFbNhcEW9xi3wwU29zMAzJCQHUQU2F3n1Z17sZ2XyRWZSxuSazXpGHvmZMaM6EQkzdRMgyx",
  "key5": "eJe5tweeXxdK4EG41QPhbTyreKMpErgfWxBfCkjX5R8VChjUECZ2WBjMETG8PPFQ1yG8dCYA4xjiTf8KHGj12Eb",
  "key6": "2TwnwKFfDKb3gUSEpmSSHZAKqcuwYVEcKK83kWfmFQ65H4Ys7Y3KMD1nPBEuh3TQkt7bSt4Xm9aK1HcfzvqoHtrL",
  "key7": "3gDWB2Z438u1yZXycoQcS1mQ7ngdkPnQBW8xbGE1efKtQPjHpNxrLfKUdtDyHerpSLc3HzfNciM1ZYudfJgZgutf",
  "key8": "4cgvyvXj2MpsUg3LxRZe1Kj9eH6b5gzUubb8VrBnYmdSNt7BUj7b4MuJeyZm1nWaL4ukdYNjCPDWoqtobzBZPAVF",
  "key9": "4tmyHG1iBgM1uR4YPnRPDb1D4eA8rYjUFh5PWcsBNFYLPjwPd6qiVjFUdgL5Q1VrY6WcLdqXMtFrHxQEqDCGPHnZ",
  "key10": "NjydckWznEoRYTAi96jSAvRrZ5QEi2KYdDFsnjkNZpPruNq84N86mLy9zECnV2EPbj6LgQbkoJhRcnoV1jD4P2C",
  "key11": "3jpsM8D2wQE4CvqQ5hEAA5JNeHJXdWKXgEzj8UG6AgkaiToty1TpmNJ5uywr16xjPMYCpqAehEQhhS3rC9LZ5YXc",
  "key12": "4WfwAaZEyGkgcKYckuUnU3uT1ZAuBziU1xSZF9QnKpB84uPWvvQHKZMLj3gyXzJbDkNWMeNhFKvB2R2ZRd4nL9wi",
  "key13": "2bWtAYmHpEuLEuSsFNfW19hSFi84Ako6AQTSzfvXRPqH7dkBFGxPhopn2E48S5kx66jYJ9hnhbbArs2ZZLk1n5ve",
  "key14": "2FrqjJi3KEXT3io5NihWWSHdKYxMF55LZYTKj8rVbmQGnoCJovPrConyQ153EiVeSwEVnGixiLTUTMyrY5aZFLTV",
  "key15": "66DKuXY52DgJNG3ySSa2gBzjWvt7Qdb8KiUieVWr2J6KGoQjeEwqTPQ6HzxW6gLx9oRFDi3vdkVZWpm48pkn2wtH",
  "key16": "supZvjEu5M6GPReX7VTB7uwzm5rHvX97FEptz7NYA1CVKfKqDVsKNSSDT8XgihB1Bgz7ijk7LA8u7TY9Nc264pV",
  "key17": "5mxo2s9YuDQk5sAitki2kz323HRZxNw2ApQT7vfNosHxardE8t3w5nVdwyMfsY5kiE1JTPFRXts8XsB314qgFWyZ",
  "key18": "5PkB8ksxQdsUnvgAciNpBGvsQsbz9fydYi2FAGXp3EPsr5NaBZFHVhMDgZUErVZtxTKUjLceERrXxUuoxKzKGTTw",
  "key19": "4wbYVeQo3X5KPZPyrLmTXJofeGn2upXrbwTvpgU5wHzkG5o4ug8hfZc3EnP4AuTNoPaM8uti1HFS4SyzYY6Vi6xY",
  "key20": "628yPWrVMbtwtEWd6vuhkaUszJ5hDTdeZyEKEy4pQxJBQZv6iACSa2Mg3Dit3ZCFDRCdnoe6SbikVifhC21TmQGL",
  "key21": "5euTnKP9NNA5qWyKTPrrerueNTbDJc7UxwDzX9BaUgwNzee3WF9BrbXHgq5EbxAtjQe627QmEg4bLpQjP2UVCvpG",
  "key22": "4oCTbFJSLH3bpNxZcXj6eUXtg57MNKGvm65ufHoxw957a6GQ2UoSXgUCnsvPPnAmza8GrykNmv1LvsY2tbEJXWeV",
  "key23": "49vogFxPkWvyUAoF33qs4pQF9EZ98JrNCFkGLeJYx38L7FC79LUbpdS6ewCHeioZimMKswLptCvKBrXbPzffwEnu",
  "key24": "2Lp14nxawD1n6y4AnaGy4hQTcQVyfUPZsTshUrw4KBUUi3zpVeJCFHRPGGofZRT9vxUeMTw6YcwJCCKB3sAjgukb",
  "key25": "4GZJNMbG4sSjxirENj3gttE2jjGbnjpxZExjhs1MEAF7rNenDSgGo3BPPh4S3paY9aK9rV7DGLDqACmzUvje4sdh",
  "key26": "4RkNEtHCmBdNP4y79vBjxNysKXdaCzEQ27VWHudpELrm9hbiHJLWd4U8DXSD8ZxmroLUwpzVz98fwCHaMyeSzNWq"
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
