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
    "3WGtSCWiFvfck4qHfbdA1obWTNMdgVu8M6Cf2Am85xGCzwbWV3EoYxo25dqFND995saUNYAxm2ZjFMPeaLi57drW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3crZfAGNuNqxSHVbEfe6pPNmF2xoDwqctqKQ2RocvtXC7qYXgC5UjgpVvdTrsV6q5R4pT7wp6DhAgnuzwrxvqB4X",
  "key1": "4VhunwzPSSGC7u52c2n7r5TnCQEJHxiPhwbJNfoNq3ewMhB8NV8wbUpYz8yUrzh4oE4s7SCoaaNvKtoPgkatTHZY",
  "key2": "39T7KYw9WQvvspBPw7xdWppW71MWzVAhjEUiHrD4sowdPsR863V6Vzuuyhd7VKoxNQjFJkyRHbBnMGZ1YVqj5nty",
  "key3": "5zAdUWW6CMgvM5CtUda1zzEoMbqD7R4yXJr5Czv8NKizsoBfqNdWXKCgVcqYNuXULxBfCbrFegXhC8T4L72uhiza",
  "key4": "7uyq7571QpYf73Wm2C9xPh5rhXHVDaYGv3WH3D4dVpxE9ga6aALhtj1hjGwVPFkWEeHr1GJGhRoHnVzzZETzLxt",
  "key5": "v9hwH7UgwSKH9eXFwh2NQT8NR1S3jooKGeunwCJVVjVmy3FhktsxFneEaoed6LbMyjCAi481yeWiiiEVcg55jue",
  "key6": "3pEwexsjfoJdAXa1juLFPsnjSssJaaZ9t4oqEBDoNhujCiEZ23HLaJvmzfBBED1KAHUiDf62HxkdzsrdMJPgmLYk",
  "key7": "2pbUk1AdptjF7K1M1jN2HQZ3wwB97ZZZ23T5bk2m4Ey2rM8GeACPdVgNsZXjTZUAmewcBYbyUPwdid5ZXQRxuEs3",
  "key8": "shBB2VTVB6Q1XG7yLHanEp93wCtiRSzQyzxd3qFBPEupzbE6dxRrc1PAxN8TVP7SMKNFQhPrPnX4csJruTqEpBA",
  "key9": "BWUspFCxpjrc4bZMAGnxTPr2uwP1dRX1cd9C9Qtii1yaGQsWb2HwBZ9nR65b3MjptRemhEcKKfd19K8F1q7NyPZ",
  "key10": "5PfMTk2NzajwVr4DMMEcKVqSVSb59m6jMXHVAH6ZbLZFT5jWjYkPeRbDErmeivmDmGTtyFB64AZgmW4mX6GucUDu",
  "key11": "4XNXfQdFuLgWru8TtpyqoVarz4M72qsokiNStwKbXvykwbGhdwWWSgRPMbwgiWTcrroxLkfLgaynejCt2f6PFnHw",
  "key12": "4ioyY9L6NVBi21nbLerQvgqCQ1Vp8ULxrQS6uN2MB6949cZftHgjDAaUZwzvxtAQJasmwj9YZxk1bZWf4atqkMUy",
  "key13": "4TFYpaGZNX9d5htGEN2nq64Mug4eEkG814BSJa2Tt7HtvdKW7QiGoNQtx3HmbnJi84t6oJjrmcyyqN71AqpaHa9s",
  "key14": "4mq4wHPzBPhwhEP7uMq66BJSo1yqdTUZD3cXctqBwF83BeVhKYfhvDAzEb9iC6DupeBxRh7A5kVmjuvk1NjyuYxS",
  "key15": "5hAAWZpg2KXBNydXTkRZJ6hg1g3gcvCRQEXLY54VL6QdXisAswBycGfCCMhTeDBZ92mLAv9vAoaDMjgBBrX3DbQt",
  "key16": "6s3dgwcWkQJPdjr7or4A2ZY8aGNP7kFLtbH6DBjz27RorSqNLntqjKmDua2uP6bds4yTBbiYDiSH2v6YbaGXaRJ",
  "key17": "RcJDqHic4PULdF6cz4HNLKMJKrAxA42HympdsSDCnG3pqj6T9fjjdUipW3Qhfv29KtoxFYuCxZusXAGxLjeER9H",
  "key18": "22FXH3efBVGw2kQdpK38ycKEg1uL1a5J8j46jbzofhL2RzU9QxEQP6d2JsSsXgGxF5VnhDbDedSPKg5D9uNNeAYg",
  "key19": "A6UnDGpGcDrHdMBYTbfT2pCTXjE2KE8xdNyhxYUzon8Lcmje6XndW7hRqz7rx2f3VnMoYh4EsTja4UrnNcT7YNY",
  "key20": "3vbp8xrHJfVjyBuMxbdgW3cMrtk9VN54mDLcHFmYS2Td75gVYweykSbpY7qVKL6vwMAPMCA1eqyxtuF9tQA1aAED",
  "key21": "4c8sV3hLRUGpbgfuKaxAhwPLJSV1zpRKHxiszqRDxSVSXTBQWYEAdra3GatjJJr1Bjq2CS3cAR1R89c6fpdXTQwb",
  "key22": "3Ceb1bHRhBMU7faWsht52S8Hc9VhVdxLumXy48ZsZTHTQAZvw6gQji5sGCTRtAEtfHED8Fvky2z1TFcTzMWJ3Rva",
  "key23": "3ckobCMyxmvfuCfiu8hxqtKArGJKuJRo61TQZBaySX9ke3bb5UQGGeHpgaaaYmdZPoF2F18GM4JugGnSk3RVc8ah",
  "key24": "2niiR3CLrMSuheDJXGam2iJVmB2HTAgCs8fZso2Z17bwxW7Pw6Uka8BE86Ywtas9E4b4pZd7He5hP7F8Lk9xEzU6",
  "key25": "3pG2BTGGogqUzruY554WcBr9RSgaAQvMwvW7dNKWu2NGxvJ5yRTKhtLGKk98jdBH7a19xk2G5YHpYpot8vVXgGjw",
  "key26": "2BJeyTSm4bx4ydjY3adFKwcrwBDEfaUMxYo98tG4zxmZKg9aGqCjKL4bMRHPypDgyHEehcKFwmk3xSp3dJcMswGG",
  "key27": "5YipCR8AzBTmvcCqPDAb1FjbqbGfEpV6qwBBjU6pH4fyNYhVGeczX8pXxjwRMgDHFsdojnq7oNHdMcbXbkL4Cmv1",
  "key28": "5P5gwspivDvnx9SGvkSgejzDNjKwsboUbDCqEPXybTnpFKJqfeyFEiasg3yVD7cPNo8cVv96BkmW6FsfDbn14hEK",
  "key29": "4qkWxM7xSis1hdSA1ZzLW9REAwi4HzndkGaUuu2wqUxMkTuHQTNTaNsVQhkwcM6Me1CcTjqA7XjtrjxtsPL3hGEb",
  "key30": "2oGrgQf2414pGiznczaRvQ646BenWuMp9J2MLoREaFwigmSZfmwGFT1oweDtHYYdfYXoMRGiiLoRGcd3Y5GtL1vP",
  "key31": "uSfUDNNGEaBwySoJc2w94tppDzKrJiECQCPScibp3QDRMNii1VTPopJGVoBt6tUHcdJECXnV6LvT4uELAEuShBh",
  "key32": "4aSpBqgX7FYBJGZj4xbLB85JRFiTDMNuLeGh1LuhZLTZNLpcFAkywBB5XHBGyxJQxJFhoGLEPAVThuQJVKieLAhU",
  "key33": "3gurNdh9uQoqw3WUPo3VsiWKBgtFWZViMVEBKS7quar64AFkTy88kvEMbUghUD9R7PPemRHkspixBoAv3XVkTGWC"
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
