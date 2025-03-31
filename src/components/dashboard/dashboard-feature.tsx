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
    "g97oao8xvi8hRTxvuEEPkUJwEoj8DgmYH3d8Khu35mXQzyFQjZEg7JhTHPjsap6Ck7mZmZqYG1pVATPci1GYjZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R8SppBUhiHJXiMcrk7Lt7RBjfrFqGDFELEPvGUJA5f39cB3hE2dXviDz8VFppjsiYp5YYCrNPpkrWH5aGKcXjKU",
  "key1": "VvdGnUGFXXYkETHMjAAcXPyW1VRgWXYoNQUmBqFmy4dHntTtDxDgGStgoF99RZzjPSjUwLJ8dNUEsutpwdJSM8e",
  "key2": "3D5zTA8AjxhA4RLKzNvQQnEK6PnAxsJvmWHPB9n9bCPz9vXRmKXG4AxZj34RTVXcYSrbTy2o4pDA9x2tpRVNA5TF",
  "key3": "w5zPQrujwhiko1fmbEAAawKoxyfadee68Nme3SD3YAZTiFYMBTVWrdnNKJXpVBF7UkmimzfKzghFoLNKat2Sn6m",
  "key4": "4U1PLVMU1pPdEcJG5PN5C672uAZmdLMsPKeP8FuDVoNVsX3EqumLw2AdN7uiTLLQ8TrT3obDRB3harXxX9rxKcyQ",
  "key5": "4u7ZZiTYSw9FPR6NiJZfA5gLaDSUEpKW1ptoARd5KBiuyZpNKh8X8WfdHva2NXAaum1xDof4sTmMM3KnZnzArEgT",
  "key6": "21bDixW7KhUjQLo7mPYA5Jg1sTu75rPDMXxT9sT1B9z4VQhCLsanN3h7ngoBS5LzqNdLnH13rciJknTCX6mEhGCo",
  "key7": "2mf1HJ3r1eFbUr2KtGGUDJWedHYjZLCmCgvDMDL9pggggzw46QaLFwaXGaW5LysEHYn7YD7rcnNFgajwSW2xX6pH",
  "key8": "31yrHDtCXAi7JdAKZDg863NXw2KGpmLMDc5KX25Yu2r6y3iKpTz6iXCkfaHSTdMDzqhdKLbe95dr4fPdZdEepSzm",
  "key9": "uEjbQnjGLwWvXb7NJH5rPwnwfk61BEqQrYFRjw7LEEj8qGiPcnMVFGYJcmM1t32QuyUPYrVYYCT6XD7m48HmixC",
  "key10": "3ePXH5R2Ck8xcaYbpf81Zz1VMvWzZMyHeC85XMXQSszTVBoXCyZ1onexK6ytFfdupVYYqpfSo6Hopc5Nz3FBWb1J",
  "key11": "37JNQDhshGo4pTRRDFdmY1g57TecoLJbRKzVs5RUfQh8PtW7oL7VwfTTKEUuggYaqJJ4QKyNa5z5jadLJe3iToSf",
  "key12": "5iHfsMZz5HH31eNuYdwJEVnZhbmUWVGVCi93REkUPNTjxB9hyWPMydVpoVCNA4BBnZ91UShxcyCQMdgYnvghuwcs",
  "key13": "47bHZrsvRZWRixFD5Z72jwCQ7GJFG7Vh7Srr8Q5mqsGJAsACYfq5GJRggvy9rigMAdqZDztxwjqwHvnN2wuomTBY",
  "key14": "2fNCSNdfFvsh3HPJXQc2PSoDc5BUVyMP7QeNY3wwmpuB4kkCUtAB1JLaFcp9KTsi2bp6sndvHbZpfXaXL1Q8noh2",
  "key15": "29d69aw4jNenmwBh1LG8L3LnFXRdFuW5pknjizti5FcZWsX16xdjyYoyhBFMMf6XDMB71pTH3UgghFz8C4b6UywB",
  "key16": "XSXgrXKJJwxsyCiy4e5omNKiiVpCm8yFDC4Zr43zwHh4zrZPCiMxwmq94JWqTF1K3rHHYLWshogbmGn3qravsZv",
  "key17": "eze9MFa2gcQCh7ccLaiLtc4K4BhX2KroYah7GipCHr4GoLFt6fHxQBDVAbDTLBsnK56C4Q7nyTn7FdNoTEGA4nS",
  "key18": "2YdEhvq8ygzBAb3H32sbFxD95LBZxaphsv7u3F1nPwk44ekeoMTSgu1VTkHfzT5di8FwTevCqELadYsuMCWkuDZ",
  "key19": "3bUJUU6A4KhFeaRFrcKVVCkwttUdxvWDVStsB5HU4juTKkVAU4B8Xf24t7S4wptsMf267MW1ZMKBasCnPm33UArA",
  "key20": "4by11W7rRUPs6bfZ7yXyDBVE98L6cscaz4PXWVgk8BGQKc526LafABjkTHK6Sa1BMbx89Lj22utvmEa5oZtiq5av",
  "key21": "5CXExLir8BQiP6LX7kyGfmcFyg3RLZcBH4ZtRcHtCJ7DGWt4tNzCXUgp2b4bNj7vZBTnVHJibhynerhoMrfedS9C",
  "key22": "7zQizjK8LY6EoGKimVu7V7XzVnSZ1wA9cMHKzLw9dc9jHuYuEMNfz4Kqwjc4vRdhDbYS94Rv6sWvCiydaxjuJZH",
  "key23": "2H9uzbnavUAv6Z1PCqWEzwygRa1MJumivr8aG2xBUytj8nbnpNmwEdkjtpHj52BfxMxBR122coA6t9wnHo3bbBtH",
  "key24": "2TkeEwCKUH8WqgnKQuJD7f6uPrH8uP2qSjXT2vdkUFFkTQF9UBxPY2x2ouUHsBCpHrLxxUJ2qd3UFYZKSD6mjRYq",
  "key25": "65Si8kwrKLw3hTeHeWuzrcXD8WFLNWwobaZjFkQAiYpStERu3L6zQt2cqCwDqJNtCyGUBXWFeTqdu1VxxBFWDy64",
  "key26": "4KBJ2RSFZRe8s5hmNm5SbHfgcG71ommqjmaEU21pouyLsrd97k2uvgoBoMYk3PuhUgJuRTzJtoxfscxCBGpMzR84",
  "key27": "M22kQWvzDZ1uTpdHp6ENiXYZwtNbpWbt9nKjJ34LE3qMrrtrwYd2UqKBLKrhfh5NV2b94JJcoeyRsMScasmXU9P",
  "key28": "4xaM3rhT6bw2cg7k8q3mAssdQERV3TzebM8PPvQmMW3uBMLBV2j73WrbyoY84dsE55UQ6dU7Wp78mokAnKVeETo3",
  "key29": "2FqfpSEmMwiJeyaw3b2UmRaXfSm7eNhMNhZJ1bEGG6cM4r8k63mbXf6VN5QceCNuCNHXX7mGkcb3Grr3Rr5dwroB",
  "key30": "5nFFixuYCfW9Zo5hWFH7fEsVGFd5aPD45UqWo9y5PLFpS67ZB1ew2gMAo4E6rwooXLjeAnEcvnuqcnq79Dz5YvR2",
  "key31": "HC944CAY1BXoAxTofw1SureEuqPYVSku3duHSpYSn4FENQfYdjfkqDJN26AW6ASFMh7bMUQvNLxG1c3XfmCZry8",
  "key32": "656KnHnrMBhzddbZvcTa56FrKc5wMV5UfvJE7Rk7o4vWmdrzkBArcdPkMnUNQA18aVpa2f7DuXkGSA3t4RtBhQvi",
  "key33": "3wASj322cNZBu5dShAVyp3GksiFZFTymSfBgjWjK8muUMw4dJnic5Ya7MLcXzQJyuWdLsRsVgntPVTeQF5ZhNYCM",
  "key34": "4V3orrWK7HZvj9CGuantWE5komJd4nwa2FUrurJH7LdrtnwHQqfVE3TQjZQd8uLoo99MCncg9vUWtk78QCPVBjtS",
  "key35": "5YY9GKLZFobJLuTBcBuuZnB1F8vobh15DfuURTSMChncLmEe3QvvgrkUwzN6iJyiQwdBAihPnCMFoWQd5CkZp2kv",
  "key36": "2x5bJAF6YwnsXrX34trwB9aZufG3eDMMMVqZ7YC7XkpLTYEgZNZhHVrfZcj5HtpnG2nTfrWDQWPSu5fBcugEzVyY",
  "key37": "SAvggXrvwC8iiBFCHGLnDRBez8WieNMsyqKUQmtwAC6U78thRT8wVAqwPhJAJutVmYSWKJzBsaYs4zq8T83n9tA",
  "key38": "5kF1kPvqT2EHLQdDdsgobHL4UxK11UtXqXTjfj1UyhLe9vWnuYuKZeZRX1yp4wDGCvR6U3D5nCkbCQE6MoXKr5Q2",
  "key39": "2sni3oynFS4PFte4YCK1AAYfy6VZ1X3FewMYUQytw8qJ9biPUgkwBiBJTYeUKu1Ezz15pcbxcUBr4Yj5TBnFRqi6",
  "key40": "2F5h4UNzZy5BDxHXj1MK2wffs3X3sDDfgGR489KRMp8b8zxUpKVmgnYReyBFiy3DwLxaikWwmFFva4zLWAeUuHJm"
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
