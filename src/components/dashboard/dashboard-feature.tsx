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
    "66Xeuq2CdCRoYcjvnEV6rpYizTHHuXbaHSrtzfsPZH1Wzv8xLJsJN7zJAKXftxFUHhBwJb95CdUd3gdg7tC4JZfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CnUx4CvBeFaaU527cNYFQ4eTn1cYKUExskowm5e68MXFgHYFzKjvpHSW9xD1d3oJJkugTNBYcvPdHpm3YWXCUfC",
  "key1": "4ueGawmZBS7BwsAqYx4WJbb7RPYJz9aAbMT1H8oD6iK2dxSJLpKxd85fs5Zo4vsQw6dxDoT46HiESXfJChepnbZX",
  "key2": "HhLWby9eJtMittAy9Sp9X9xUqieKmeeChoJGnQYQcngHTn9inns7QUGk62EwkxM4tRxNA94skaQ4rhVxdXopj6m",
  "key3": "2PwzqCmCSBg8VEcwvrBqnAGJ9poHTjYicisrGCjf8FS6vMfHo1o3vjPbegvqqdVh5TPJJ4XAKhXY1WhiRTVe3dps",
  "key4": "4fr3MvFAW8E21hKKCEqVvEib3tLAGbGWg5oLF87oRxtFK4vxV7npHoFCYyjJMD3G2CQYaGL27ka6EfHXFpRF2afX",
  "key5": "55EmXzATM9utXZXreNSr42DYgduZUT1moU27Vxi8oRCuVpVUQ84a8jQDGrUFaEPejpXVPWoJvxCgzp3XMiU1TAaA",
  "key6": "3MG7LGaEAYsHJy5WF1RVQpNvzfs3JizHVKvaRYLHxBQV7aueFwG87SWLvUqdtBFTPbUBTweccSc3vxByr5puikjK",
  "key7": "4crXktzNmPvdYb13pMncpAvEbJNc39bNaq3tkETsUW9s8BKLYrPT69BPYXonctf3P6szgqjeDpjmeZBBJMYmXouF",
  "key8": "3pi1PnEKAMr1yUrYAVudg4TrXasEKMowfGuRBVt7iDUX1sru22KCprV8SJZEQ9LbXjhCzKPpHcbVzEepBnLNjAF5",
  "key9": "45aZ1QvbkibRP2cEsN4ZVm3yyctDV4eg63cBYcxPtTFSgrt3DucfwM1cDMVEJnE2fkC3GWjYd66WkKPoZP1EyMtM",
  "key10": "5jCLeAHcVkXyJaqXReApeoPF6tR1aNJjuyyap7T8sLsufSqnGJdvdHsMwU9A8Nh6PodG6bxBREYqphHE7tPnfrSo",
  "key11": "5ea4LcF1ZAaq7yyhtQxkbPXwewcdanA7KT7neJLjxCxxXTAJHMP7yPFq5H8BPX1KqCcExvKb6nCZ95LqLwgvHiiu",
  "key12": "7MRQCK5CenrWZXB6481yS7D484HscpmJKUikntU7kpKRTeW26azQXYkGzzNf2ap4ZxQrx5c7Le61PKjzVcs925x",
  "key13": "3CGndEgM49TzNa7aFAgQUR23o4KGYzgLghK9vkNyNBcpiTC3tD9M7WE1bothg21aYCXPzePevfUAHhSZViXmG6WJ",
  "key14": "3HTSrqpqi6au817SWMD3x4kcaUWLNJ2LsuMvTNkdzDe7s1xrnd1XJTU2YWdoA3dD6e873ZTsGYo4dpEciMmMobu3",
  "key15": "32ebNvmjJVmi7NcfFK4b4DLTPS1RksqMF7z87kc8DFMRLseSYQ8mSbGC3JC6jCrfpFKoDKws6iT5Zn2RkeYF5PVH",
  "key16": "42ELjEhN6fKSG6obtsESXtQMAoKHfx87Q48MUax57JSjmEuvVSa98hPcGszBYPgcX49fvKHXQx1J8MtkqGv9VkAy",
  "key17": "2uZtofqQwbvChM2enSwAAw4c2DXSGC9LombvYwQu7ZrgxRDTJ58VxmZFawr3pqCWUWWHrkK69ri914eySReF2gpH",
  "key18": "7hruFjL1ugaw5DQ4uwZffkXWZDioBBmXjk8MUvQLFRhkQtpK6m1K65xg7rpdJd4bV1VubCCZFViWcy8tCNne6z1",
  "key19": "2MNR3Soe45P4btv95DZBTHYw3oKZYAd13FNiTe7dvgHMDVz1QcjBzYTmDUGSmADjehakHmDd8pxFfQy5tLnue69P",
  "key20": "B7wJRSNJ4DkeT4vpUKWjL4WANenu5RDygXDuCsokdj77ACDcByEdDVSNoEtfSFTbduUhmAriDZ4btt3Mhbyz7X5",
  "key21": "2dei1hyuBYXzX9x35X3jRzacLoUBkEz7i7iSRVC9CLR4BXiWUfJVQzcn1rDtdSUTLJ8AQc1kN33CwtwZDdKDcrP",
  "key22": "3JUvvqAdZ5rFTLtyqijSegkKZ1XyrgBJHfDEBjotbGNEBTphM1X5Q9QGiX8jxD8HtyeQcr9becUp7sk3GTMyiCUd",
  "key23": "2KsRenQ6g7f9dwb3xotiAxL5LBBKMJjBFAuwHsoAemcYs6ovPDz7SEHF7VY8fG1FMjpyAFTJynF8d1xc5i1qUhGD",
  "key24": "4ju9WeCMCUQcqaCcU2qGfnsBFFsoSPt1PbgrC51oAFy5GNW1zShWoWfg5Rb7J1tjBnyMg8DUFaJyiygSeazfKFfk",
  "key25": "i2X8ucBYZiooj7Xh4sSfK9hao3MojgwKetRHG3etD4rCpMbpiighXJ92hKtqxdijw5zQjPkyW3ttik9a3oLf3st",
  "key26": "5TKzeZxN8SCkuhhJY1ExnuUa25qzUF3LNKWrhNiK6fQPy73TDRycxhVuPp23CrSmj687MQeTe49ThAMv1eN14fmS",
  "key27": "4Pmpf9tujFYwNVovv6jbkYgrHSc3yKvytdhnTEKMMvmL6YYtQ7zVWyUQtvPWyTN2gEmatqXMsF7AxXNExjLifPaA",
  "key28": "5yMGteUHaqHrNghdaZXPtUtuYTToywuHXunhjKcpzxLFUjnnpwhcPSDNxH6bNqYg8Jfznsa4fEtowQwjgK9KhZe8",
  "key29": "2Se2EV3956ZbvCDaPH7EQ1kmQPuZaouDnZf92J7EdUoJjLnYRXWvxByG3vLrqjGymuQmUCU39d3DxSDVt9A2iXdZ",
  "key30": "3B2LogE3os8QUnk9rpVeWB4RuKpD4gtuKjUcDVHPxJyMo1cnLZvbBJfBjfk4uiRdm9U5jgYa1AUCuPA1j1W2qemc",
  "key31": "2pr5kTFA5vGC5kaBy33Cz9KvmDMnsR5Rbbu8GqJGkdqP6xFDWhzsuAmiYsDrvxvJ11uNbHNhFHyVMQrEUwGKr1ak",
  "key32": "2Jib83EFLfWACujU7gatRWvuQfV7x1p1iRaqkvuq2XKQMvJKJFRDaRoXW2RGMhWog9Gq4dbLTuE7x4qM3ZKJjxjX",
  "key33": "5DpXncabu8Xc1imVPXcB87HGg1dgU1joV69LuWibnYLoJcvefZD5YpVN95wnxGYn6qFFLdjBV4zMcEtgQceHB4Fw",
  "key34": "4XhpwYDP1smBJoNmroVt3fe7FmXbQ3SuyH7fmD8Ds3HVQh3o63M8QeDtg6A4fD1PFxghMkDEN64HHKm6K16NRvwY",
  "key35": "3m4SZyBPsUYHujapkiLB5qNYEt3SVjLWnHAPuFLviG4xjxMmWSfQGV89pt3nj7DiCkYZt8JuaLikt4a3d8jJ23du",
  "key36": "2pv8oS9JZRLpK1wPyGw91neELGn7eFrnESpHwXWzDudkdsuFz4ftEHx15DkHQ2tYXZa9gCzG7dhzM8SJ1EmCwrx3"
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
