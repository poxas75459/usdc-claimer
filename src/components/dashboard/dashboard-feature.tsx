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
    "3dgYwoi4WiVx2Ny3TdgHdCSrVuSXC8UoRJQktJH5VKjfoWvQYuVBNysWjB6vxRnVjPo4kEtv26WmATYQPerhUoJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CBKVcQKwq6KUR2F5ciK9Mk84sWwsW7rsAAi3PUdJz9tfzMyvhqCzeTnVvjWzon2SPsoi9S4dLH8pwpa5sP3rCor",
  "key1": "2irBNX3frhkSfBN3i2t5LEtmfDAFuoR8HkPwAkEd9K8Dqd9EUE4PzAMokSAviPCW2rz6jqcsG321EnGBzP7wuCHw",
  "key2": "5cQ86t78STMa5i7AuF4dNov1h49ov1T6KymQjQ56Q5XFL1JChU8t3AS6KtJmqehv8zeGkePEb3FdtCjMeqw27diq",
  "key3": "41fJoicNKrMFSi9SDM63EcpJMcRuAHkx2rUnkJETLxZiri2919RWHYnW9mMtPxv7UfWxqabSXw5Zo556yEJko812",
  "key4": "57GShyLVZEyggxNb6n6RivrFTyQH3q3ZV2Jud5yjg2hsLNgUvq1zvWf1Dyqmzq5cZeaPmnXJekzpqrjc3KwGXqA2",
  "key5": "4geJCdku5xgKSrez7zJXeZtHPR8E8V7PQP5SnUzXP8io1GKxM1djqceB66W91M445w2tHSvLk8DP59yMuLCSQLKx",
  "key6": "5m6HMQxDaGEkvMxrZxCkKZYatgWRQE1C34jYqXHMDAwUXULMY7ein7XbPzBuG71s8QaHcg7ZP2hAEdy23C5Mz5M2",
  "key7": "28vsuDPrELHb61GVCLe16Fvk5PKxH1yDVFxFJVX29wmCxRrMyEmf8SDWYTEA1PxNVxkNEeNkWxqd3EVPBjBZfb2v",
  "key8": "2HRmX1MUTSiRrJbJhbCukRWumc8BeHkvLvVM4TMjyaDQA4zZYcYwyXpH8BY2rNVLfcUrXSB2xeKB87kyVELdtoqx",
  "key9": "3rXpv6riF9kgnho34GR8QLcs1FDZBwocqrprCc4jVY4Vk21q6tw1SGfeGxgEm8p83uoqMhtBi7e1mQb7j95efREx",
  "key10": "33Mm54ur5AVZeo4AFFEZ2mS9Xyrh4fgPfqE3RAhTPuVXyFepGhXeQ39PbXZE54Xb8kf2ofTimirb9tcnjr5hDxn3",
  "key11": "25SRXqWEr1Es7QKU53SyfufSKVtGvEqR28NFkMA4snJ77JJVe3kiXq5ydvKktq4rTgLsJtbSzQ2UGRnL796hiFgz",
  "key12": "5HTEWCZxKnEfN5mwfPTatBFBuYM7PM4VNjcvYAceF2iueK2tzARY1YKe42MYzKxLx4Aayz2rsKKKGU6qm1B81tQW",
  "key13": "XYrLPMRqZHMpoF85hGaojTerfdkdC2cAZmsciDcsuukHanTBaY1aYggsUDr2AZKRn4NzrxK6KiABv7usz5Uw492",
  "key14": "5ExpudXaHhNhaR1riS7gFuNJAopXZkQZPQuSnbdJKm5gxV5WC8VecDj2BU8a1NJLQrTv6cAgkE4rcR3NYDoBEsm7",
  "key15": "5syDcyfLcuxjcwqzRw22vnjqjgbA7WXrbMxXibCrLonewhprxDSsvnzzqt4RBWdLY7sKVq8QZUbnjPuQGdQkMWYU",
  "key16": "BgccEnBU7Ti3uXLus7P69dW7SYTEJzjG6XaoV133DeysgP5rjGNgK2znUXLFjubim1NiaT1yPT7DGWT4xaMXMAz",
  "key17": "2agZ2haKS3pCHxaGPwdnCP2qSqRBBHSicihMspTsyFYET3SxrbuVeaaHQrMxuZtQ6sWtkT5v9c4EDEBVJZgrmxrF",
  "key18": "9qXnWkxQnt8UyAEv3TgTCoUwMXtC55HemQf26q1QzbvFCtKigExymqLEbksxwjdWq5arCVEhDJ95mkb6vopj1FZ",
  "key19": "3UHujoWyN1vBTdpzfem4fAtK4fLWWezGdb84W72hqvacKKfoco9TaVz8isXHuq7gWcfnkVoyFweLfBjk7qio4V85",
  "key20": "2cHEQwQZDjBrgcpn7Yx16nypqZAmwAbGEWrS4ptW9LAkyCyCYEjTeGWtersio68hymbPmoM39gnjxPg5LQM7rKpj",
  "key21": "3a1bhcGwMS5L4zDNoJqV5SEZFBgbJ9aoAD1oNaHjcrdbwgEHZnPW6rmT92nTzfDk6TbPoHxUCLYyuSkqttZbxBxk",
  "key22": "34gTpMi5JorSHPsVDLn8zDUSYKUFqgn8L2cxGVMdZtGLxpcLhEnc5cc76xNvSEGvUmGwQQL52X2AC1EgygAyghR5",
  "key23": "5zs6ogc36UEs3LvGZXH9WSWpR2Y8VWc9ZPR2b24NvKezfp2keMSDcvFuQ3XDTwpbwwJx1h46oDJtemUyiTMJftw9",
  "key24": "27ei9Qv16UZzjoWBBjGLUfFCgT5TcGyLVQJLCnKBZjDXE5Bzy9PTe4VdHVwe1HyrfQM8VZsyaxFuAGjMHj1HDCVz",
  "key25": "4wuUv58BLPpY6Kp44Wj3hjSs2Fw4WWLxzNSL86KtTrm7aa9mmAhokBdQTqFhkYqAxSHwepSMm4REvutqkMenJX2V",
  "key26": "56wesL4igURYQQ8RNwucHGYyH3PzH2dMYCF4Dno4KixT4zejz7JKSnCuXS91UaDxzMCneYSza7yng8dT2mdRro8R",
  "key27": "3VuEMnW4UQUmAhQQXkWnAQoAkFutiDzaSojYehDdkS7uoFCrQNyjfLDC1ux3K4oVx6MmRmnGUjFo45urFYnGEP6y",
  "key28": "2UHLpgaYPbfbyELF86rzyZLwcc3B8eUGcAQMDqFJK7vzGkfj41wMeMbXKgAN1VTjmzQ3pE85NT1S4obnwMStoriB",
  "key29": "316i6aPxXYfMfEcWLT3AtuYqXbHRgzjF9PBhYvHtpnd5ibybfQsa6aGMwUFeGEmbPNk5imwMpHJLPNT3oJ8n1Rf1",
  "key30": "3Q9EUeNXuMqWpuH8HZFkx5eiQgTudKCHg8jN4mfEzGqRiSxSw1fDdcfn53yRND27dQ2RJdSn5MJBktG2yhX7Fyki",
  "key31": "46qG1PVYWDCX54Dc6Ci8zZkyYuV2QBhGKnUvATAFjQCR6iJfFGsMRCi3WEBLLtL1L8JPmN83jS713SxyAzHQ4bZi",
  "key32": "L2GNk8rZjTREkEAcTtoV8PWgrEGiSmKRK4eJfktrVKwxRjPNKVY5iEDaMMgYiixaXktb19Jf5h7SSVNWJLSq5SQ",
  "key33": "5UoknkipuU75TiebJ9a6jvsnvqKpiSyLiZe15r7zKz78AYiJ29AM6DTgZYhPYXEwqkX3faPtw9SxheCUHUYgX4uC",
  "key34": "3iXPm2iojHLuQcJ29KHGJCfikHQVaZHotyynjjgznUdb4PGVQPbUFvTXBQgA4WD3UnCNGRVL2SD5NPHbp46ZmQbg",
  "key35": "2hcujZyaFNe4JsRwjwumx9K6A1PU6Bzic1MQqhq126YnnFX3pLn999C4vjVevymRRYBDirWLWWtXTtaJXhbJoF1v",
  "key36": "3NRXfH7VVj1MrGEW7aKtSYWp1ziBqfwJrvxUQQasKL6RDiksLmRVbYdZCQoFkVhvPZ26f4AetykHeF6DogdUhTHH",
  "key37": "5Rq3RBDoTCKeSmZ2YWKx5PJynw4zs5RpCaASD4nk9maSeHMTNaNF48mEZu8KZuP24bN9LAzUunP8ochGFMuxfP35",
  "key38": "5YicBaStNFSvQcnDL9AJquwFhPvJYXQQhwJMUgFKTZycqvoCy7KfAL2VGoj6zZ3G2LJ1gPYp2Lav6z2eKtHKLn65",
  "key39": "S6o3MCfMRXERJ7vWTcCkmba2aSD2jXsxtcZcaigwdV2BVCQNZNxf1nBXw11ctXJNudyvArHzk2WVV5qNVBnQos9",
  "key40": "4MgcRvWJTpXYSN5Mimoeh3X1Lb9QftsmoCKV81n8TeTBNRZjBcPoAD3pb5PBB171KX1ifFgQoG45yvsC36RD4uiZ",
  "key41": "3TDUoYZNj1ia2gCmokeW4wX3s2o3VL3cj1iiH1goZiQyAvW65PgVE3825momraxhUXW2yhZySsqyiTqX7RvyKRXv"
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
