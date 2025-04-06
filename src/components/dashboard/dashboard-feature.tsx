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
    "2mXN2t1fKhMaNqxJcXrSehxKtRern9ER6SAGXXePfBgJxVbJxhEFVZeVsxdmVtp7sCJHiXsjdPWN65djo3AjorSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oghaYEepp1UcuXFQqQqjPiKzWvk6M2Yv8VC22W5VQy6uy9HZGR4jkzhtSfmgkLzyn77mre8Jv3z3eYx9gA8xb9V",
  "key1": "4Yg9qfudZZkiETe1EDuYQMQbD4YrZTMorHq3txqF4PyVdvyi7GrRyZypsyRyXCmKHcQQSLvN1yosVSbYZjpUwXMJ",
  "key2": "22xdR3mbxBrEkTia1VjiieHz1eBGVAY58xWs9ofvfnB4DmP6crpbPcxXyobGDfRvZybzS6aDePggtuRR9LRzjJ1b",
  "key3": "4aCYCioq6svrojdcQNRxGgtyAGvfzpmCg3ycmBGQscfY181on55WV3SVqHr6vihUvJTQW5uxu2XSpufVYTpAHNN9",
  "key4": "2rhC635LJAYqebhXyDAg45deRcJTkCoRBumWupiDS5qMmfNBp5KGyrc6B7CjYqt28pqVoTujQXkHH5arZMTziRYa",
  "key5": "5a2hzn3BvEPCLNSdtdAuXb2wfs5XQcwY8oKRQGP7rFjoZ8ttSfeqU3xt2cuVVrYRfPRuQQztkB18zbV8MHfcAc4A",
  "key6": "2snpMrKH8AdKLbfCkJ3tZNXDCm4kJUbHxyyo3za2SHQwDXtEAjNpCduKFwp13zR4f26FGJmP8g9m8F1J2CXSczfB",
  "key7": "595JZxzqx4V4qRCdcVaF66iU2gw9VMC3PzKTHK2jbPsBjCeYkauABamx47EWsPygmFU77wysWB4m4SoWNyCV8T1P",
  "key8": "4eozPVwH26Dnh8NKYRUsp7sD7CQeb2vM9b5jySVhbBx31tXMSN1YYxJVDWuvc81dAEwBj8sm5W8HbysNKLewK1hC",
  "key9": "4rh9UGAeL36G4RT2mfEhZSwfvh1FztBV27yMLXnrSGWw1ZKLUHnfW2MP2gUbCjcbcindCTavhZzPc6DD6ubiXL3A",
  "key10": "2LEo6YtPhi3CFXpKXsqG1eNr2uKhactm7Keaj6NLqe4reo1Aa6ZkC7pFgcRt5SNLZZ3vLRPrcDE8LD5oeZcGXvbf",
  "key11": "5RX8W2jEc7r2Xj3yLyadoeWkFSryU2ehx88J1oNnqQpe55Yfw71P1PjwQQ7Pz2q81sBEher3QH5yLDTybcVTyCta",
  "key12": "5zTjr7NA7Cbs5zt259EWbZktBf5kWx8wD6g5HjPNRyRmyLnRXNvaF823PvfBuG5dSJyjUp5FR9abesKzBMDpFgsM",
  "key13": "3UMozWs31iz114QM19dH4kd6mWNS5NRkQDHK541vQbDT7adwUGHvQzB6JpcWmRJSxzDQwNP5LMSJcjC9gqsnhnfY",
  "key14": "2d46uoSh9vP5Drht68ZP1rvEcLbBMdW2QAfyzGLc9Dpbdkkx8YMY6DFUPhFSxe5CV3yS9TK8n9w58VrbCN3VdQtX",
  "key15": "5L1TbuCeAn9vG1U8d82fkajrQoHAU3ZL5PEX2EkUyDxpUmMuafQSJgZEfzTkMiQZuwyEjgr6QCuo4fGTX3kgvQyZ",
  "key16": "4MsFTNJUfdoNcv1LxktSUCnduVMRanCLmAj5jxddyvHCWFYWSbaGQe3BkSirWNmMR4mFYMX4g9czRzivM1EEX8Fr",
  "key17": "5uZZzEfwnjhJzAUJW58ret2HtXj7pBfsBJRYz9odDuVVPV9gFFeZEHvUtAGhsSY6vL6WckeiZhWezuHjpGFpfF2p",
  "key18": "5QCd6uAEohrx4wSmaaB8StbvXbysWjc6Anz5hnuiuuNvcRZ9wm6SrqVTDPad9mJPMfZQvAuaeZPQ3TkLsHLvhg4b",
  "key19": "dzYtpoBjiS4RjqLbqVTiGGMAgyM8xYZzxRQZA6KDbochDi9gD6tpYemyFcSQ1SH8vuSTuk6ZuBijVDTfeE33ygV",
  "key20": "ZcTCW3yyfxMGhZPzDp1CJ9NFkfzSC9Q5rLwXp9CQzWRkpJWfRv1XcW4kArsqZAzrYBbQaAqMywZbY38XUmHUCnz",
  "key21": "4xYSqob7BmVrTUu5SsvGtr2AEjrMAUhidgMfneKiMwZoxgSmVxhDYwyRB5UhRD7u8KK9EmhErgAzS23utCTizTNk",
  "key22": "2GpgkPqeriDW6okbk1EeBg51mYQsFubKvTiYsXCotixTNKUhP83LVBYUJnLHpMPcj6f3Jqrb4TQQGLhfoWePj2BH",
  "key23": "iq3ddKWUTPrEteiq1skhiiKXpgzQeHkACCMhVSRYmxAZW97yic1w3WYGQeL1ZbThUzA1h2nwKdXFh6r41Nm4hSg",
  "key24": "5mXfQom5psybEuVcqDTLjyxXrXfyShzG1Xu7fHK9zFyUuHgCcyCqRjpScqxqjt9U3fNpPNn24Mc82tFQ5UtR4vm5",
  "key25": "gNLnNi1y5tkQjad8VuJceKcQ7o3w5wTqKNtgSW3A9acz515RFDFoYdsSvQ36HGft79qU9NfaoAuWSCK7pXritqY",
  "key26": "3HdKn9QczYCQvbXKjGSQ2hy3K42w9ycirKBY1U5WEeUvxqAjp12PoSKp1FnYRfo3b2zVwdpLhVyoqh877fydtzkQ",
  "key27": "rq3RHD4yqQtZZs2RLaW7Xye9apJFtioSt2K391WWV8tcsTMtQCGCavXKZZgKopJ64T4jpU8kgA9213faayQPsyf",
  "key28": "5ti5z2XunTKkw6NoVjrEScfCamBtLYgZDDegVgGDj8Vbo5kQN63VX7maJK4eg1VBHVrCLMYtykmsRV7QsM6TEN4r",
  "key29": "J5x3i62BXf2tWN3NzqTmcCuRb5Fahq73H7u57rXS4mdxTUZgkhhpniK8vzGNk31L6apy7tPFhoLLmcxxAv2YjvC",
  "key30": "4WYyjP4uA15kwZSAWDHFDcXBrpK4jFL2vk65bmpUf8j3VNMUH5KHAaxcHw45vB6H2KJ88kMuSXqikhv9yvueLFvF",
  "key31": "2Tf32kHvAAdojV3gCr5NFKj2qjsT4Fcsmv1DRdC8FzEHFsEQCRfB9xjJNpZ5wCBVNVFUPHuafbd3fVLF4nVcXwM8",
  "key32": "5R1RPATo5ANBDcE1f5DwcMyKeV9C6PExF9yc9cxjvpU8wqjzDrs2VBg9svXGVKtbvuE34BbaBj4R6TKGisLtMvya",
  "key33": "F2QzwHffuGRF39iMDrQobsKohEUj3yQjzPvCDfif3v6FheJe66jMLwZcx134Up6NwbZtU6EKJipUd117JwYRD8H",
  "key34": "QFXMb7wV2cKmtDJue8SyD9FGnmzT1HfS4yXSLVdwTJfJkQF1MVUu7BQzLMmKXqryXyBkLwsNXQCPt4a2W9Gb7rq",
  "key35": "3G9BZ2SihdYxipCSvV6roFfqZHQrNGpQuJCSR8DQt1Kb43ZS68GoNpMugJ1vqQY58s8DepXgHaQgWRK7fem7aaed",
  "key36": "YK5x1eQjbaUwEWHBPBiXF66brCvqdBNkwm8aS2EqccQEvLJeK1VJffbNnRj6PT9Fm8t93XRFhGQMDi4ZQsundTa",
  "key37": "4pRbzhyzQKsRNrjPZ1f8kPwMkNaokJn1P4CY35dCPSrdLEEpQ5w3rJmZ1BMMZ1CxpKapqsvf5rtHaySrEUo2rcK9",
  "key38": "DbLRWjwqR6ax4HcVmg4EDo1f6GswjwTqLw1KUgYncCDHubM199cBDe7qgdM6Gj64Vk25wHrMU1bHLtabMnxPFw4",
  "key39": "5nhRZi3kPQpu1VsayKjn4rq43qRtRjQjAwtgMSs7uPQzwSXFqnxW7N2pJ769g6cwB9LLjnYtrbgGBqnpEGG6gSTH",
  "key40": "4WAupAhruomqSmSTr7f3yagTS54EceGUtKYQJoBRvjD1B5XcqnazauM2EMDJco8FbKrmrevvgt6uLQw8GiFF1toC",
  "key41": "52hn2ymtjHQEvt1sfcEA9GYKiPR2Rx1Xi9baGPgU8rEfgt8aFtBDoBpqQ9bU9cN41aPNakbQB7TsRx4dAsLW57Ni",
  "key42": "2HVa5oq4wbZK3XWDAycE9axRZs8iTX65wjnAv5az63xXntADJb9Z2YQvy5TuLtDs1pZSAHZeXDVYPum2Cqi265SE"
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
