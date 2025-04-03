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
    "3YuQvtAPgXTiSULC8Jv4i2uCCsmhzs3HYF5kEt2TjqKStHbGoEjGfynYeYR3aNzmSPXRNrg9ygdoHCTdwCCztTp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3poa8Vgxz1AuxnGcvjx49KjMsrHzMEKM34WDkAgxqK1K1PHfMEaV7ZTT1dLmFGoHhBdyU9UkhUryAebkLv4Wysbn",
  "key1": "GrMMcpULmM3f2BspNMdJp12xQhfPxoz65Ndza5Gd7YyXMkopKad3CJpjYcuzoqinx5VEtEBxNL77aHs7w9z9LG1",
  "key2": "3NdUPfxGbiZqD54rHTkq3kAPMVTrw4jYqSHVDauoJAAHigB9jbuXM3JXNesxETJF5SvgejX3QMSwyUGyBAtLnU26",
  "key3": "225paesmmZynN4aBFnt2L4yBij78uVGpZ4qgtAbVmDSDBm2hyvr38cgx1FRvkyQEWMDGGcykqAKwzUPu3omon2Zu",
  "key4": "fkTna27bCwWHEfbcPoSbzAukSoGmFsA81nouJd5SDQNyfK3e5brejnVoxCGA1xVkKELWEEr6KUNod2Sf5eQdbe8",
  "key5": "F5xGwJvSRvvfLGsEgMocoFKWkiWLpVjN2tQCbizx5S61gM858hwPFa3THf8vSNG4ZvcWomyPH1ZkPhGQRELJN3g",
  "key6": "5SxqsQPbfZo597M96jZXfvuSEQUZjvqG81ZhZ7XTpP8wp5jAxnicN4CbKspe52GzEGnKva8KRLSRtJQF1uvD1U9B",
  "key7": "2iYaWXf1nHeBm7WF1sr4TmTyY1cbqSuiq55jjwtyYE9z65tB7aAMS4vNUkYSh8AJF2qSvW6T1t8vQjfcqTaJYauA",
  "key8": "3LDAA5B5vpNg8JvkpjtjJVQe3b71YDRzxWsEodsDm7ckZLT7d5rhTEX15cXUFFXuJHDwHmTPjMDpgm4ugvLRh8LM",
  "key9": "2XETdKyB5SokCksyQc5z7GuMZYaPgt8g9si8vxAiafpLReAAyZFuyNVPbe7hTvdj93ykGaxSc1vphHp2nhqXn5N2",
  "key10": "5wwdLaefjBtbgWUEiwWBpdgwtJyVet48NDpRAKFBr3eLYz8MKnZ15hMw5eWocuVAeiUZYEjV1bzB5mjzzxsZ9onD",
  "key11": "1a8kMD6QiiDA6frRgWJzfB1CrdCfNoPmFjPopxVVpJyEpytZr3QqHGKihX9zt91LpicH5bYPT2LQxsMHXzT1ywt",
  "key12": "Ff6du19yv7UQXVHGGgu19CtbDHGiEqcNdHXadHiNW8MEzF3J2AQnMH3TdNkh8HgiuTsJCNEcbhcVWuVnwRnqHE2",
  "key13": "52pMFXVnS36pp3DPDAbpTyLVFa5Umr597H2uHkXT6mKUeXuXxZ9eVz1S7XzPbkMnYM6M6FTMq65mV9rh9iXJQxXM",
  "key14": "3fWEM7WjQsLC39JL7qaNgqDeZDwfLAfBWvyV6H5NXtKRexBfJfT8E29SkQb4fMvENaQcbyCtUoP1qKU9EoQUZV5U",
  "key15": "4JXb7vAMctRUVxxYvqU8VP21gAoF78f8KUt1GDwUhfT2XTC36PC9ou8oAJ4Mbfp6QXyVqb5vhJ2Hfzycyo296JzL",
  "key16": "3YTYj6MPkBHCzHVRLdLBX1zpURKWCKs7dgW87m1TEfhhdyDYtZVqVirmU9RKd1BQVhxCLbsTtR7xrmzFeMaFFCbt",
  "key17": "5w73gSUwZqMcbAAskGZZ7hqDbSe3bWQs5k6mugaJV42x2zdFKoHYPrN36kp7vP7vjMqmjyQvHv1YgDh8XiMCUaZc",
  "key18": "QoA3j1QjARYL7ZjGn2WtGWxWhiTiXUeQcStcBahXT9hWsHWY5mkkoWdaHipQ273mF2ABgVboLnp3rFruH9DfvwT",
  "key19": "PRfworvvbYjdnTvtZhyF1WY56Pt7wApy2c1PBuYX8gbxw6sbb8qRUUSd9akdNWXzugR3qb6Q7SHAgsivQDvExGn",
  "key20": "9BqdZxrUGLq6Tu711Dd4ibFKGwAHtFnCRxnxFhs2fsR2WdkqrhZYBryo9TyzQjmJJ4oMduGsRW5ra3TxMfGbBdf",
  "key21": "3hADMXQsjMwkfEZsRCuw3JqcWikH7NSK425ypatbWUooj85grFPinNEMC9ZTV6NCgaRAobmdUNXWsN8zEp2LFmpa",
  "key22": "2FQhSwofE3PaY23w6rS3ittjkFkuFc7F56vRdwPWNXrQZsgFTMTpjgUXy8nUY5juQgX8phe4LWm3tV8Gd2Zgzj6s",
  "key23": "33g3hVdPWTmZShkPKZs3N3uXDwMrYetDnGV8JX7oUXYZRVNgUo7ZoMvL8DuUSBn1r5FYC2idtG1QUXqnTSQrrMuM",
  "key24": "26YifcGc7xakuT2VpQxJUnADTpi6dBsRcQqgL5Cmpzf4enrJ9XNfpBhbWjQvUYarKH7VDE6PoR4Qus9ziVFm1HqX",
  "key25": "3priLeZopY4byb2HF5g2EPkwpKkD4t41hTB57oSjVy8AnwaKZw5fRxeu9yAkGwBMxs8HYmJAtSRk1aGuiozKpq6s",
  "key26": "4kHdArt2p4hYxm71y1tZUJvFT1UVnopyt22D8eTdb2LEpmWWJ3ovdXUBq2orkiYGEfu5ghXd8xRF46PXvUQH6nWu",
  "key27": "3jzbm8g7TUNU5LWwLuhrP9cmYEy6XDPvTY4YbKmRBFZvjXozBKjGxeTk8zYaiKqJ7tmT3kSnr6TKm97TtoLv9DvL"
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
