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
    "2CfPg8ThiiamxPDTh4qBFCbYemdhUwn1G6eVXioVWnsYXiWs8yGYif4t6QXZh1NWGXffLzqgaMVKDggTw9gV9Hqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BN4xR8L2i5yzuzF9CYTYUzF56JKETRBsX8AWkT5Cqd9pCeSBRrhpukSpTwWogLEBZbBoiVuCmJ5iPegUdQDDmAz",
  "key1": "55ju5EkT9mxJBiFqP4LEwfg5o1See8gyJSHQiyKsb9QEo2Hba5wBzRNwNAHbnbpj3izUnxRX1fUgUTV8WNSBK7EU",
  "key2": "3uqFy3a5VNBWrbbfzyGXCbWtaqmmk44iVEspbNd55sV1srdWxdPm73s7vpJBZhHzgmZVZfKn6YWrJDM2vErtuwn5",
  "key3": "2wVgbGJ3FtxhBwck3LBCUtMTDb5H9bZRXyQjn4YG9LHReYgDQHirL2Bbn52FMC5x252tt8AKmcvEbZK7oNXnVx29",
  "key4": "5q11jZ92BRywoRdT1usrwMynBihTgC18CWjqUvhh1awHmiB64imgzTEG6ivCUAdbzGe3niwX6vZh8X1DydwVT256",
  "key5": "3yP9S94iHg8fCLPf4Kqw93jophZLpVBKtesS7JJXAyNJk4zNkaMJFnt6bJ4NcpPeYEgzdY6M1d22zQhVhM3NydcL",
  "key6": "2U8uV4BETmm3GEcUiHEWVQgQkVEHHVP98M33j2dzLsVJqtZGZZhma9GqzF1z83rwCUthHBPc8aGVMebF2Pk3QaUk",
  "key7": "3QwZnHjkptD9FLdekKDMJQ4tfUzsTx6emFzEJyehx8nVc7pVS2w3sV1x9cevDTM4TbazizgpQY2ViRjYKdJQXvDz",
  "key8": "232Lbr6QRABxorLaENTuBwKE668KEfBkCNRCcFa5poKP1ZRPPAv2bCxDdQzweRzaEUjcjybWqYAss7MACwM9uALv",
  "key9": "53FVmnKo9Ubty3dWcUFmWPSErGYM2mYgbJjRDgQJLsT4WnzMr6YsvXxYthgPaaJu5JuNVpgC4ZuQY8gYTjEXgcPC",
  "key10": "2Q4tHtD5qyzMB4aFkKWDjnuk2GtCkg5wJsbAik5WywiPtoSqk4LxYtigPVnHHpYejPKsQrqqytRrtt2pR1Fvpbs3",
  "key11": "29J3KVpGBUDMVeCBiTw2b4NAanghoqN1sgTPHBdj6bS73PCJ1wddhpgcPfBEFXureeLyouBkj49sEGiZ8EHAcgn4",
  "key12": "JGi3TGYDCY62ZaBu3PbVR7ntPXgY4LVjTVkxSraM6nhcqB4GVX8iYbiNFnhjpv5Vh3W4oosrfgaMPCHoXsMS7eA",
  "key13": "5ckSQ73MsiL3rZCbG8375wrLmh1gEbwqv4VG89j6xmZM67b6bfJcv6PLAJExFxztHCmSacgyscN8tKamfBZkA6fn",
  "key14": "3cK2uP1rB7NWwXLoF7sXXRynvoaDZfBvzU4VgLVsmS4D3TErfKCpM5tA7prZjo7jT19LjEYgAnz94VrXVFQMxStK",
  "key15": "58q543fdGieUEtutXi7WegzpjzjL1dEmvndUjipusppUVNxxBUqhVpNVyrD32xagnmVJVsZdtCqoXPZe5Lzhp2zp",
  "key16": "56qf2ZLYpZn45KazNhy7zVL36XugFYNGjbVwCx2ocEvhR8fx8rGBnBdFj9aqkd4xwgad8jZBrEUpvqk7VzgpfkHt",
  "key17": "3WJ2BuGt7EjELbUV73aquKAjiD7mzotnwEJRaagVac7AFnUaH8wz9W5y2AJ9CcAyZUtPu5GK79dmnLhz7nP7uRAK",
  "key18": "2pkVk2GkFwyU5NrNT4T7THuunXWEL1CjjZYjs8dgj5V5dSNQt1vAnC9wJkCk6mnaL2JZe7CeEtZLeG8gw4ghge2d",
  "key19": "qU6hTHmfCWsZdrT84PKCYSCPLnDLawTyNGJN7dLSJ6ap1tF921fPDqBsofBziMqXLuhYRXVMgDeABM7hPpjprXS",
  "key20": "5HzkKdkMEXbpwojUV8LwTuEYqm6KVY9GtfqqYF8x2YrC1tJMSiJA1dgzjwLGUMJLJE5wFtuecJCuVqQ5VWDLGbcD",
  "key21": "2USDTCULnsuqTS5Gc3PbsoDegCBhMjKauSbUmUnDnU63f3b4DVEF9GR8n2AqDQuqfxqQ42o63QpzA4d6sGxSnCEY",
  "key22": "4aLwpTjRb5SrcHkfB23a5VFfCr1rbTMY66vDhoBBhhKzACNuUBJRwsePE6PeXCyTcdcTWLraiWtQw7TNHfaNCj59",
  "key23": "J7xdEDSRiz7W3ByAUdHg2XUXN1u1C2qRmnEbTP8yaX6M4nRgvDG7i4Ggv8tyruRvXAxcxoj3PoDwfhhd2aPseW5",
  "key24": "x8koN3uaXeDMtKB9sdCtFQZRDJvSk5Nz6AeKi5oCiZAtzzPErUAP7YVXP9omGj13BtRM7Ac7f7zSkE7h2SM5Vra",
  "key25": "4XHXZvcNfVcz8j2VHcrp57F49mAPYsPmLQn37NtfNdoCUBKZyjxFgGgPAu9aq5WMks4Fxx9YM6TBLrLLsWW5bQkj",
  "key26": "5MRMSzmxWpx3HYmzngTtMWsUnmH8RMHfJuTUJLnLPmt4RzxJdAgMTXopVFjaG2fMXkoMRFXLCmJrbZLFa44SZznF",
  "key27": "2vnwc2Nc8cX8ye1ZFc3bT9b3PzRM9zaKv62QtDhwFE41GhEyftiBX627PiakqUi24eSZYw1XhHZBt2eNmyaZG7eS",
  "key28": "5DdpEfXG5E4Vawq2A3H4DFmgh4AXx7rZUssMzD9a35Wxqrgv7zhJz3RCQzBJ1zLxAUJBLRNwFfZBJ7GzxAPhX4Br",
  "key29": "P8KGnikBW4mN4cURPVSvPSjqEGHRMygVTTBUYrYsEosiVrwcsvVj2Jz6Wub3em6SRrLfthdvR9LeKKko1mivL17",
  "key30": "4LZcQNU1jFSovCytooXPrWPgnqgpnUMx6f7PfuEZhfRWaGuCRuPgYZfTxHEaundtH5UsU4976KYVd9HxzrWyC143",
  "key31": "5uNRLKH3fpEEtcB3GGRQwMUQ6yrWLzDLHqHk5fueKtUVTR4npuSBg133oQUynaRz5zKP8oRQN9QNTwLeE6Yh5H6v",
  "key32": "4fvpMg7z4Y7q6rDtCSGh7hsbaQaaasaRkBLKAjP4edvLX6hBbx8xqbcUF2gkaUgZcoV4rvUwRRL7N4ExaUVkqHu7",
  "key33": "9TAbHYkaJpPYpfKdAMtc7PKDKsCpYM5vaPV25rGUY1Q7WHK1Hs1vBYRZVd1TR17sDXbMpTkeUMLjxX1LvaDQB7U",
  "key34": "29ujUZvjwYQpKSjwXtvWCjbVkhgpYgzh7SUkhXL8bLrWH4QK2aNcC6yksJNiG2mUscbdbzUaDDqJx8eY4fvhgBLq",
  "key35": "39NbpvyUPNW7Xk838q9zTUYVaE858LfUJSbkXjaS4vrYtB9xyQpDCDbXk55z3kDnXyBMKD2TVhdiVgDWazxBs2c9",
  "key36": "5r4QAvqBeVdgsAnLiVDjAqbBUE6KSkeQGhJphed7E779ddMVHUptvkEEXXDoUJHYEsXaukhCEGUNLJyPHDecyyuT",
  "key37": "2jN9b7quxgvtzkhqQvKaQ4fbm2kMU948ogar6VFntHtixLzymMeuZmhNA7UY6VazDCgkTHu21rrCpJGuqyjeX4u3",
  "key38": "38L43sFWFoSk77uyprmKz6Bhgd3wcq9486Ao31pBSqAGsYL1rGYhm5c3z2X97QEAmGgzscNx6JA8o5c5hgEs1SfP",
  "key39": "26QqW4XXeDMUpK3SN2DbDPhftFgMHjAqPVTc6a648objPfWtX55inmJQviJScwE9rPLb7rcZMQ5zcYNH4HxGZbCo",
  "key40": "jFA2yMr65yGYUNBdhh54katX6gd5TCT4hN8Jro8hMuXZVa6kJnqZqqVQSNs7Zw65BTuRQMUn4gEqwEAaxVTc9Rp",
  "key41": "SQivVRUqxoQFU1b5oADzqA4X3GTL61pUNN9wUkGM7E67nusLwXTuD9iFNYttH6q6QGc5MVgvyvmude3qNcbCkd7",
  "key42": "ht3jNX5AKzKe6FuQ8zm7P2SufuiRBBM51i7CBft7MVnRrZeh1YatavhXrPQ7B8EvZSHhVZWhxnbtr8e8gVAhpYy",
  "key43": "LPPfjTHoYrEuJsnMHZXdhBN9x1yVVhVHWTJKxzPgaHUD8itAa4VZmCrRMrtiHKJtMLd8CzGNv2jfFfHviocakVX"
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
