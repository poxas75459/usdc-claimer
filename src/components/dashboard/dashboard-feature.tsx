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
    "5qtRqxkNRnpHN9eddYXnjp3wdwRtF7M9rtZQ2XCpnE3NsqH5cuSKT3qE8eu8Q8C8Q2NdjmpRbTsytwNmpbgVLfWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i1QAad95XZKvT214dVEWmjifpDCgC8gvVK3of2zvZrYGeaxM4kYMuqHYLQBMTDaHxuPYjKoiVXadJHapc9wFNM9",
  "key1": "2seErrRRJ5FPuktQpGRr4vdL1N8tqbHnVa7vVHgKWdu9trxh4e1ugBcumaMZrokKK2Lu4rkSoHaEbAqer4Ng4AQb",
  "key2": "3G8Hh7eED5P5PJAHrjHEw6xfsuqUgYqMz48GmY3FmNjtMsRzGRQCLNwoJVTqgjhjxM99Rb2RxLL4KHteYey9VN3t",
  "key3": "5szjqTwPBNw7otac9eUgQR8JANLcqMX9L9kEnHaJ2CnYydGhZs8gCyHxjRkVAwjKqaWpPUvGJr6PGhxejv7u4xHA",
  "key4": "htLdgJMpppuhzp7ok2GDg5GeUmXz6NmUjakJKbqEnBHCWQxzNdQMi7CotGSsyNo2Q4MLqgR5itU8gjRNsHFNBKB",
  "key5": "ypszCysAnoWpGcMeBXaGsMSN3rVcaJGwjttJdENHf4RJy4dyDbWefmMmtqceXhVwPs8beGsXQJHfPFxDhTzxAn3",
  "key6": "22KVbtehGMmK3LJweBbszBc2VDS6JH6QW5hHnjBa1vzLuCt7CALzffAqivzcxnbwZn6rm7NzdrcW7RyriaWspnhr",
  "key7": "3qXek5sJw31pUVx75N9ZMrssr4AB9SncoCUkj9sXDVhZzkaxASNj9Eb39iaUxkpzNPBaGC3HpxzXuUz2qdpHbXef",
  "key8": "2GdfeVxmYejfEc5gUfe69iGLhG7ovR3GLrcwfKzAfu1XjBMPgmtQ6waq4qRadebBRzLsWUomP2bn6XqSyGVGuL2F",
  "key9": "3opsHks6d8oeL9EnCgsVp7XEf9f8jVDu6Q52tEL1Rab79J59RUnVc4n6Lqv59ipqM5PpqfEMsseSdn1XPUSmzD5V",
  "key10": "Si6KGYTArVtV3N74xLnD3hq67PZcEu4riY56Tw4dNMBm9Ss4KfVo6juiwnyc1dTuc1ZzuhPXANSD5aaubSM28wr",
  "key11": "3rF6RYdKkC9zweZmXSp6ZHP8uHpNGVoNP6xey5YfdSC5Pkokmk3kTros2jgxPMZRgAUnZQ5MVQX8Rs2UQoiXem8a",
  "key12": "59V2owjChRe8VSvmKFFF4GNmhcg7AfzKD4TVa2vJac1UVETitvnuTPucgyDCPjZPgrUiQWtUtkMj6XjKmv1Zv73w",
  "key13": "4FJGbVXksdvErAb24CTpyATk53XPvBZpP5DpAcvJaZkfVpExHCaUZk7Xnzifx9uZspKoMupx2y31hMu3YB24tXyu",
  "key14": "627D9ZS8JwGHcxRKCH5HbLZwp7ioLNHD84xxKytufK5JWcpn8nRrzJk5G2PJT45NLEPye95TD1c9LgGs8Bq58CsZ",
  "key15": "45ahqZNxbgnCAmx2N5fW85Qh6k3rBmmBAbHj94HvLaJLgcmFNAoEiE17k37c6o3KhQHW3TbjW8CAUAqUnsvGVnKJ",
  "key16": "uEckkncXDFcHE42J5qwxwykyBThgYn3VuAhuWzGyrKrUrFMWj7EzQLPBvdVkgebjTEpTb4nCQuAVKax6u4Ns2z4",
  "key17": "umvDXgZiPwcHiYkykcHWXQRJnBhCAKPspWXZ5GzvYvtCYgpHar3XeuXLcrQVs4RAPKEVuYDvVCpNiF65j5oc99S",
  "key18": "3dXmLUt1bsGBnHUUg8S2idrP8jESyq4n78hupStwgqUDRqNnpUL5JnRFaCgrSrXNRCbFTR3ofPAdkRYp51YSkrS3",
  "key19": "5X9RfSZCEHYb7bN5dEjGszN88T72EwczmvRSGewtDjg1xDHagGA8DqbMiRomVTnhLSuGoMN47XzJMgQoKZHEvrfC",
  "key20": "4Ascw5djLBmzqxgmsn6mpbvBG1UjHrHk3nJJZepS1S4Gd7FFwkCXQqABGRNzwqEpVqVaPBZVGxk34n2MTudxa19F",
  "key21": "3scEifXXjMjvdZWPNgABDqYFeR8WWNuXnf6TWZjTX4Q3coUDHrfHPiuSpAqhvjViKct7SZVQY4dVRMHW9a9XBFuj",
  "key22": "4m4iPiMNUQoBLKMiR9AGDSpu1j3ByNFnWsw8EBLa5TrTK4tJX3SENxj3HVcw7mKENz8aCo84kQ13bVM3q8Ww7eEn",
  "key23": "5jXT8on37PdrSUhuP5RrgpfsZ4u8G54EDL9QQgoNJVMnAHk4omMkxBsF8N7awZUfgEbftvZogrU7cC8TurCvQiVR",
  "key24": "32bqHRP7dqm37vaCS4uBBYJLYfYQSeUVDZy4TPuJYy9aeS1rmtmz8rmqcLxjURWzpLseutVwFfRrhYxPgnELsexb",
  "key25": "2GRQDBbwLmtDhAiSbw4uQzHqrR8RCNZG3GoNHBGAaAaQWo1SR5iQ1tU9V8RyFQfKLXEhwxpKdJNn6ir4rvf2B22p",
  "key26": "5BKT7dWQF2JrKsShveYBmyMLHd4LsrWwR2fUxoeVhbYGYmshv153uv5dHfDGomU3hcsQEBkHqbwtVWgb2ZEDwCMn",
  "key27": "66Fzf8HGEz6ritHEfVrc6d6jfbDmZ2Gqw6cSbiisiCZr6xh9K3M4FCfMVBh2szQoAcqXUSABWvYPanGSdXQotkjx",
  "key28": "3sgBFX3EvbJNxi1gQdtPrGj8GNsMoJsZachNT4PNNdkCwNXa7CaGW3e28tNN8VVXpWfgU2Excb2HWK79a4cQ7nbt",
  "key29": "3GCF89TZXTC9aTs6RkEGYbUfvA1BkNyoTpvPLziXbsd9wxzxkctajRvNpf2LdekQnZBd6KboKdFzvFmtfHxGkGrH",
  "key30": "oGJVsnvrqQZQuTPx3ED5RMW2V2JUFB9S3mGhvivtEuJr7dJ5paUKd5R37oWNJu1KNZaBbr1sq51J9e21f6pUn3h",
  "key31": "25s1X9BbHVZojVWWDeyxgmTBM5HrFtXS4FQKTbQDSc2E6QiyhPmJLmN2H22rtENmKeMmWHsqKGXC7BsNkyTvMn1t",
  "key32": "4LfA2pd52XSjQSS2kHjy2CEjTFFvGtM2NHAmf7PfX7qTjthcT9p3118akPhxGVA9MZbNvWLCj9DqHbkPYthAru3g",
  "key33": "5boBdaTT4htg5DcZX2jyEHEy4G4ukZacPNLickLaPew7FvVaegq63b7sHkmMH8yBS6bL11MPjJnoR4qkBDnWiQ9n",
  "key34": "5PdpCZBtFW344QwxJv7smhQQ8RWVdDVpBzsu4gmsXrroX4Z4jgVFHB7PMN6LYTCsDX12zaokE8SryvYpEe2ttfax",
  "key35": "4GkKVtumSCMvkdBVPNbQHiU7Nd151oUtAMxYwdBsys6DmTeoZad3to3ZV5tTGxKhCaFGQ6WSCoFp3v1fm9XLWwpX",
  "key36": "2qkydy4J1ZineXioyDpDhS5QBTMGPbPhRvvjxHqM1gEtztUGA2ZcFD2GrC1NivYNAk4KWddzw2mG3WU6xZ8g8Q3m",
  "key37": "2gjhpYrQdrMjN3hPS9eD5N2RVqzVDtM5mjUsvEkELrN7HyQkLTAEh7xJPWPKdxcfRDZ67U6kgiAfe1h4WLNHEYJC",
  "key38": "5ZJn5Crx8RBkWF2hMB2mKH2JUhJEb8jbikL7DpeKsFocGhfePePVhK5kqGEBgmFypHSUpEwnxso5yibGfMHpKCQ6",
  "key39": "2mtSFTjJmMhjhZDW78ySEJtaDJ7DZWqN5ExNdkjPwZbMxjZzXjtVw23SmM4cRMqzjavJS2bJQB77XEiu9Jo6jYwb",
  "key40": "5UrF1a2ZtcZouqVE8hQ4DvEcr1EkaYC4rPjKA8hqJRBKJpNcxBA9wD9kA5HJvdipVqMe8zi5FtQ9pSBGpkoyBbUr",
  "key41": "675HZNivs8mEwkkZ5E62TMsTUVjLrih9Jf6uqouFB4ghNLHqjv18oKAFRJn6daeniY5FF5LVzNqGaJpb79CRncdX",
  "key42": "4iSCHs7JRcTGGXamQQF44abLJ7PfEFsG7nNJXxJvQdbsFSt8zGazmxPgQz71RCo4knMrJoJV9QUX3oxsEqpPvGrk",
  "key43": "3grFCxdhmkMnPSdQYNYA6CwpoDQQZhPpKvi4jejNASPDZjavxAPdcjPmyE2ncAEwaYnKPDXhKVvPgrh9TDn6mxjb",
  "key44": "3jcrJKdSbdvxFQMnRLWGFp6ZSC4oFLttMwUZDHL39ReZzYnsxXFb5qEqF2MtKWPBP6eAchBbTs79TAuEQZPbBS2G"
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
