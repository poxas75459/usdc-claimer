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
    "3Pk5uKufzQPyCDhgRgKGEv3MpW8GRxLjuqWfFMcWGPPV97mJqKcBiHiM3dpLTwmHz9gVmUWUUQNx7kee2FkPhXpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s8J1d1CLXbiPbDJjFkQ2yNWJiMmaLMfrsRKs7JFgTzUq5HXW34TCKzFZELeEtptq7nu6hQeocfyEtBq9oTQ2nUQ",
  "key1": "5uhKS7ajEx77XJxiFUyFRdQjGnrLtN1L2wufSui7LcsYJz1ZqtTwba79UqbCxsYcpF5WU26jybe5wMG1JXeoWSeM",
  "key2": "jh81QXwcub5qbW1GAK8MrqHFfSMDpUVfMmKZxUHBW6n8Ephz3qX9dqF2UVvfrKM7GAhZEqneFPn4tEJRrAi4hyx",
  "key3": "5WC9rZ9MALKF89aC2JYhyACsTP3Qh9mPRgUVG43e7vzed3LSTM1KPw8mKNQ8hXjYQ4vgk4FNzsunmrrcqXLyNHug",
  "key4": "5uqxMFKG9Fmu2vB1Pz75NkTNjXEfFsB98RBfQaBDBgrfmDzHadQazhEw9SaDF4miN9q7oicJWELoY5gv7zqXpLML",
  "key5": "34Cuqdm6wcqz5JzTyNNb5Spkwx2U4jvFwY1nRSM5J7jtzxwTrkLuX85yv1AXzKKibK88DhtFdAEZpEqZmy16Bhd6",
  "key6": "27Xofjk2uNwN3FgYCyku9SRxm3c7gLRRGqESDx3iCzivXX5rBi2xe516DLgD5rn3MDonUhFxn9mh8Z54coq7TwSw",
  "key7": "2ecLAz9H6UfZZ2NpL6fXYZfrBgkmFNfXdN3nAnspFpXt9fSkTjcPtamnT5GRrkafFGAH57aPW1RmbRb6BjGvFMYt",
  "key8": "41dFNGFTKSZZFr447jRrUEFTfpPwBMeyTQPWCjr3P9FFr9zKojiLNFUgP5kYGdVgwPU5Dhzhi46GKhcPqMWcAJ2S",
  "key9": "55tLEW72zyNwjtxZTgeb3NXZdzd1K9qh4yUkvnm57Pf5ryagvdPKB3RktzG7GUJR8BZyoJQDrmNz3obJpp6VNWww",
  "key10": "3oAyqVguCeeiHzMXAN4i1e6uGijNaFYobgkjYgh3S5UETYoVjusmzcVVVrxPagXp4sQsm6csK3NHP6Ldv4CFRJHz",
  "key11": "5sd3ooAtX92tmvB8Ui1Rw7c3NHsWHjc51PxykJ1kbb6YzYgYwjaih3UjAjiPG4BmJ4gGgPW2XFgrQq4qkQCmhu4Q",
  "key12": "3Z12u3jxxWVdjvMvRYDuKQ1tK9qRqtdK4FW3VpjKqtpg15u2PaeKKCtSWGez4WV8X7aJUMasGdzXwX1smte3t994",
  "key13": "2DV3vK9hc2Wb5VfPk5CMbXV2sRCfaLxVQbKiiA6DK3rSvCsLhGRncvHaXbKEbd5HnZXhvphuDQ3e7etTFDxMf36P",
  "key14": "sH1XeDKxCe6T9VNkRNGobg7bQszpwuwtJX3i93huQW3YrwbqNM94PATQTuGuP84f1RLRrDMViPwi59msQJfBbnM",
  "key15": "5a5YKc7MaGPFi4UzPeoANMyUiDjbhKNJQPmfgRxqsYU9GqqXw9oQvCzLs8xoXx2AE8BdzRiVpasMXqNEWSSA9nYx",
  "key16": "3t6AwvUprWbyMv1kpLhTHhTWrjuryUb5JxHZf1qtVRRLoXJRbmwi5TGXkH41wbFtU9LurJUxo4EZci8wV4SHwweu",
  "key17": "5ASFBQVSQN9V7H2s6aV3ytbtRh22kfvedgV7nDSz3H7qqDFcqFeR9oeJ1Evy54yCxQehMiznBVPu8ZyQFq5Qm5Pn",
  "key18": "tN7z7cxJ4F9219skZdfDko2ppDnscsM452dbomSHFMV9QHvxbUYt6anxqyi4PGLd4d4ggoYpTVjUG1w6mHo3LBd",
  "key19": "2HuXvxQFDMV2xfbRZzdeChAonTniesfz9onGa8q5Cv2orU9x23TJvitjWtC4GwErMjpjxkVVjUdGnhvnJyzw7xRx",
  "key20": "4ndQn1rebGBSfyPuGpoNhnF3ruHk7DfQ6YzwZCByGxRhPjMDciv4tF7TfSYekegEb43zaw5LKn114cqMVZgAbFnT",
  "key21": "4hgVaiuBRVThLdkCdVLGoZW7hDfb2e2iFw2Byu28UgsxK5m2bu14bm5eHZWjzJFDvTZiCxvn8cbms4QunVKMuQdi",
  "key22": "67BLagU4HmDFgm7GGW76terYCmWNMMg6fU4qXZkhTVC16ngegpkCxrFz8hGUVpLSMq7kk12mk2LHiSsHNPRKw5F8",
  "key23": "dNndhr5eE86Wz585NmVFpxGNNBXPA41Z41coTyeTPE2Wa9bSxTRYKLMDEW9CtEdzdYPLYtpBpBcd9HXs2eDQM2k",
  "key24": "3oDwx5THycNRYS8eAWJwL5tNo9vwmme6jzGwHh4AxqeTi6pQUTQ5M5i64mY6pj3ZHXTCJmYSv1gLVJQU9ELgP9Gk",
  "key25": "4qqenrCP3dPZbv4NEdppSGaV1eDhigKUMp493fMLiH9M13daSe66BHKD7pjVkg6gwWYCeeQsyU8sx15KbXoYoDh7",
  "key26": "HXSMbsfWajciPko7ZgKHAmJf3vZWm6AvjAzQ4NepP1c8X1kAb3G7n8N2jZG2158STfP9DLZ1ymjVC2bsVLDob9B",
  "key27": "4QxnLDQG81LBXsu8QHkKEYGg2uX72ZMGytLuHPn3azjQyTBs184GhVvCZckJshi86b8tGimrMfxEyrwnNbws67X7",
  "key28": "5vU5xyMwLHcxytTm3Tewsn9jPQAcBq3fQhncqwbC6q5NHSbYcwfn76p21GRVfL2DkGGRYcoBXPdLriseLgd68h7Z",
  "key29": "TUwB399GvMfYJY6ziWcuQfTkVTKuVwfhYm59zMScEDpjCr4eKt38uVxdgwfAU2xMREGcTQkaaw37R5XRFy4Uwjk",
  "key30": "2qNz3pADnJLqa6stb5FjGWS5GyJHPGVEyJM8pidQu2TchvbrAxnW8fahTS7K73ZQcTuTR63DcJLZrbpPgka6DuwT",
  "key31": "3PfKFfwtmhL5Z6m3qcFQwxQxTWHMiLteHPChLujYQZecaDAjoLF79Yfy7CKqx28zd7AyhRSh9ZGBcgh8bxfzMhYm",
  "key32": "3pDA6tH4k3b3DP6HJ9Hgf93FZCwEihQCZkLcE7x8CCZuL7auQJMx4PNzSciwTFeGA7cfxT7NzBNkwZ2CLQREpMyE",
  "key33": "5CFEjmaq8kuDBXD3GXAL9KbxHqT75pAiUAH3B2BkXZ86WTsRQ9PhjVGpCFz3Q5V4m9niMbSNwoCTfozBMkPrEDFP",
  "key34": "ccPBJXSW8bbUL9rD7j2PX8NZXurZY5vFW2Q5FGWBsKtBR1arGYytXsusTfBYtCpqchprRv4CnzqKfy38AM4S9qJ"
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
