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
    "631zRQ6oxf1Gahvd57Ej3jRAYTJ2MowH3WMUJv9BM1WJqznzKS5yx6MGScZNY3i2DavGN9SAFL9GHLjmrqdBjh5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JemyrN7WJokinCiaECiPGixb2BW5BMnChehprta91U1o6o6ZnYKMUUhU9XCYuLbHVifCBErtPK8UbCVnyNXc3AG",
  "key1": "5kiuKdTKjTV2qgjn1o3EnL39us1kuKnZLFs1RRZrofhhFo2h8qAZLLZWsqrMSVLmb26DHxCCfBTxAdmpgrwTZgry",
  "key2": "2JQLPY7wUUpGNgG9K5MPgRw3arsVNNTRFHSrAbG8LJHZxqeLPdr7cGaKvQGdioLc1yTxMdRH49FoErmP4erBzLKZ",
  "key3": "42YdFdZV8ARqZEde98D6HaL14umomtUXAjHDK1Se6GAqZsua3GqWnWHmcUWLydDDxNEv61q5KegCrdGjQgz7era7",
  "key4": "5qGC1R6Tyqpnsktvnomp7Ty7odAvswm5F54CQNF5JVE73xFb5ErxGh1HTpqxFu1ksxhgJn4XqfrwnWGPKE4UreJ6",
  "key5": "29JEMttaRHXVdBSnkvKqdjew91vP6tuMinTyoBpNrR8VBWAhYGCJVdVhacUqSLfAZ9gup5LRGj349rwo3fUPodMJ",
  "key6": "2bd8Qt6mBbhpuZY57jRPqzfGJrU8wy74LAcDWotb1ijPDaRpfai5LfVaP8fG5mZRV13Vcse93yXe7z8ej4LD64E3",
  "key7": "3eqmheHAfxAMQw9zGJNNfhHQev3KKWv9EMtuQMjNpgnWigtt2ofkdkeFyJSFNGkCfQ88UGg929AcSiaAx5NkmaMQ",
  "key8": "5mUD37dwbdB8K9w8jH4vUYUcxApH7Szx7h4d6e2zuJE9K61TvtxR1s7uRoSF3AtHPnYhPiSzQ73spZVMqM2ciL4X",
  "key9": "3TwwsmXVGMPXPJaSyDM4gJXXFFUdEnpiqkDnDwwCf3KsQ7Cpsv8Uqkb8AFvjDfEDRGzejDfoxRWi71tHJ4JrpaPy",
  "key10": "62ViGmg2gyJ2x34fJNtfiD9x47WGaFR7UP6tPmhWxMZXbuEYZz9qogDe5d2Dzb1whW5ov8i8ekUnsoq3chnnvfkr",
  "key11": "4jwU88Zrk1sk5fLHLVATE3xJKtf7Un5zqxjivw3yaNh2TdUCZ21tSryzVd9uobcoXfU38UzFnYuFKdHFjT1UBFra",
  "key12": "eutzLRKygPZatV5FYywjyF5jPwY6vaz9haKdAb4QpfMNoph6SneZjBBtfnUwz7juFdJb4VVhkSo7qp7hmRniDnE",
  "key13": "2BhAUiMt9DpSw9BbS6at3F6rHw4LQHNfYGgLU8CVKaZiqnnoDxPDBfMnA24YbYB1EzKUGcLh9QniXUaskj8KJVjr",
  "key14": "3fMkAWMwFNvgGYh1B7qjosmxqah7XG2kwcj1XMZEot7YN82oz6sFw9tvVT8vHDjT3D8MNyg5wyHCcx1FvD7cKNZu",
  "key15": "TwGE4EqcnGSzzx1hxYW4UDozB8A21km8S2iDzkiqgVSbyskuMWFGG5vaWAscFGXsPJRtAkDihCW2PbqVbHiNy6A",
  "key16": "4aFP6S5eUVDe9yiAbNmyHgrJ7qJ5pykcCGMsZ1zUDvG2eyrRUUb3NDsbKWBsZTv6ZFikaYYdMeAvenyzL4WWbmZu",
  "key17": "uqpAXyN7queULk5RnXkxduui7vdXB14UNxgKmumq3DDNww3KxLGhYKoR22JbCzTa9irZqeP5PeA7R3mJTqLFziY",
  "key18": "iPGhChMpWc41ALZ4h1XEcPuGVM11KSxz1Gen4RBwM5VjzdGePjvcD2gkCo53bT3JmA4MHUtcTwiA3s1hw7XJgB9",
  "key19": "2bkr9hrLTZZXQu6S5mP2vZzLVb9mdVVxVewAuhFu1Y6M3rDpmQH56mtGqbaKM1E6ZZDtGpixzqscV24XyATJ1VkK",
  "key20": "dBRXxYPybSa21xT221tQZEd8RVJ7fbeqb62hW2qSfghfFHZugRBzb5bPLL3FvZDdEwp7yjnLc3BCcNLjPFemDfT",
  "key21": "4BtStbB8cu4sjoJ6pZv34P5rtesyukWPNA82mnxj1ffLepB9USQ4CVAcjhj8hTW7aoKv7pcigG7WEe5vLiXgqbZe",
  "key22": "3XZH6KMrfoz5FHpyFXNjbDTsCDYyvcuRRKthYNW3s6Ha61eV2mX7579M7nRUmaRCiRfMEcoXitusQJjvXEYKFp4i",
  "key23": "3SEGjXwBBfVFUW4JQgX1dyo8VDFxNCJXvpGQdHkposoumRyxZoNHBYLiHorFVJdtWXDau3njkMF6unGxYnVzugyQ",
  "key24": "Giw4qes1WEaxLrhEpVXLDcz4jzh1Buirt1n2beJwV8wfaEiQbGJ8KjVz6m2P4BYJHHx8Kz5JzMWiHmZBX1wabav",
  "key25": "2RSjkdpu1VkSoZtw6Udeu5GGjDQFGV8feEdqMnMRmAyQK181FF4myRz41gjzR2cBpwFsXLzjekishaLzAzkCGo4m",
  "key26": "5uKGc9rV3A4Q6bBSyg9eodmzDh55vLofvP9Pac9MCvrNyaXxpgeAXNWRMV7or15CQBigTkBpg1ubsnrFbDTd5jNi",
  "key27": "2NpBjjCkyAE6XBeDai2ynHWgLzPJp5TWeAvQLkjPJcm5JqgygzXSbBDDtyHh6TVZyLGFhLNiDPFfg8QrnDBxAz9f",
  "key28": "NFQJG3QnofHGXrdX6yWVxSYtnWDyBaVtj1eqeKjAZNfvtRXvTUwaMwzKMdaHTs6xrUYsHmGf7iRzhu5ejVM4YRr",
  "key29": "TpoX3JMTQ6mABtkbDfdy4cZ9a5jVy4fmTDKdLpHEPYxGjt4QNrAQ6qoAMJTMMjvRAqxmRCyQMMvRc1Z3PsLGWJU",
  "key30": "d1GLCkhmoXfZpVxmGewanpc6xSH4dnzW6K68SRU28aJSJw7aDmeabsqXtwbAaDDEtq7X2DpxwuCHSz29C14QvXt",
  "key31": "2HaCBWPTjBtpSbjTtoRoHXji7nT4tB4T7gZLVRmGViAZkxvy92hHTor5HMsHfNEXRc33eiHtVt7Dc4KxQqnNbG34",
  "key32": "9HUWjFFHAxQGj2jsTM6e1FscVnW7yoo8EqZLkXoqKUiAbduL77xXSyYtjiyHd7EJX1s3C3GYgZNRzjLUVw7Fw9T",
  "key33": "3SnhfpXuQrdJRQuD8ybWdkMPKXVd1djG2byNptf5Gy5fSZdDtEjP9J5MxQ86rg2yXfDxuLv3ApFNaQs9sHgz7qsE",
  "key34": "tRPFiZ4mbQcAv4dnBtqzyRL9RLecYHbBrcfAuZ3EqJvNMUSk4vfdqwm19f1f96s8s5E5bojqnLbR32ho4k1DCQL"
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
