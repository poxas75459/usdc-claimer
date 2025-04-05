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
    "5vdg7Wcbg5MvGwAyH29YCmZg6CzwniFibVtKE39iAWmhyn1EckKd9pFkYdW4zthTgD1EEroXahY7mwMQWWdMdo8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "676t1gGrS83EfDzJMuty4rbyWjjLRuFoCdhYRWBKXJ1VSGUkC3Vf2FGaqxd9k4ZvUF4r3Q6LCLiqgfj2ThsUsTPd",
  "key1": "43AjnEgrXYg2aeR1W8dkUeqAFKEsXp2kyjpeRCNnhBwDQGg6Mhkaid4v7XtdCJcJHqZQKg46MURpHJCaY8FUxYAD",
  "key2": "3rkYJQti6XjgxEz2ABiXXkV6ocCrSzdbVEY1FCsYf1CaTPzHQ1AdqrSrYDd54UrWaCCps8dR45MLV1e1d7XtKAbN",
  "key3": "4qef8GiC7m4DG9Wr2jnP8HfGT51VUfsZbWHhkY4z72V74yE4vxp9ar68KdWsm1WzY76AD6EbhZLQswz6guV6ab1Q",
  "key4": "3wCoXfcMwCwVD5iEkBGtc1ynxXf4vWUZf666hrB5HhzUUec9xCcWejTgj9wPaxXGW3iwSYg4pWHuxc9x6GXZfExi",
  "key5": "2FHpwKChyFv4FVT7PmtGWShzXDeFhTTNSiebU4a1MGppa3ee4j7AmQfge6NW6Ga6iAjeixRugwwdo6RrD1pr8XEh",
  "key6": "M7hGD1PcgBKvdcbeuLbRoxQ1oLfD5hfEWngrfmUdm5rnKdwedn7x3gi8kLtdkJBtkQu9GM2aMqwDq6DDFba6uoD",
  "key7": "4i1scxnaYs8eWUeTEqVqiYXqm7vs1JzbvvwcdyjY96x6uGDJdw4MkoAcnynvv3pPNaofRsb3ARXaTwrwCQ1mDoLb",
  "key8": "38tA2t5AGP3XexnHqiosSkHMNEPxtL1CHx4x4PDec2TqjF7jSfpGTXmZZpPfhywgbDRBo8jENjJodX1fkZYVz1dA",
  "key9": "ne12vxaCLWPBwvHkorXgTqkVJRKwFVGikMJXLdtqxGgMXvWiyBWsEwKYFiCyhQwdTYaBDTjAFfHZ5ytSbgBqjP7",
  "key10": "3uDudLWZFTTxZNg7zr9rjJzx5cTTJkawSYLTxt3xXFr846R7C5z8MoZff8sfgw1ib4L8Ec95t2m4vLiGn61CdWNw",
  "key11": "4w43g2kqWphqZTivd5fG7UucVRxi4gekJUPU7orzT5VUAvL8KPdvXMFMSD8DjdJcB8RYzjC6JPSsDJa7CH2CrKd6",
  "key12": "4KTvKy9CngK9CBGQmiSRiigbqbqUB96firAxGUnhByQY7rB8ezX6FmeMr27RfGEQUS97L8pVximruLeFRypKRDYe",
  "key13": "24YMueDkHNW8xwwfNgv8AapjY7tiPaF2xPguB2hFhGHwJWoJmtXBLWokV3fB72S66CToqck2eWhEUtjkJwmxiW9X",
  "key14": "5deABFjTA732m5U7apPtW1MueJkdwi5i5zgeWk8cP95ZSsDiitVPnFrPf1U8iPgxThmBoc2LQFsojkiDPxLe7yrB",
  "key15": "wD9Uvo5a3aQFz7XCNvBASH7Eqsjzjp1EqcTLSX3TEB7tYCaXAcNfMLbKGEyjrXaDQX2V81jc3FLDo95WjPTeF2P",
  "key16": "zPDUPs9QRxreudwTLCqKDX6MKDgZEgbphdtCjckjBmtqxrPJn4qsWfVPzLYpCLnVbDF2vQxb8Jm59hxNKRM3Dp6",
  "key17": "47c1UsfZdQR36VLbtUKh4FLPsxcFzKvkw7NiK4D2saaoNwDFZ8BNPexqUzjf9CmGi1yJqyZGyvvBaSyqN7T3HXfF",
  "key18": "4p6rJ1z3gP2SMfMA5M5Qbfu3gkbHvytRkgWhxkwprwot76LeWUZCmaYEsQrorw3Hmk9BRfKchC9ShVHRCVzYAQbj",
  "key19": "56aeP4G3FP4sab6DjkXmYe2ecYG8xMDj8yquxgV77mDM9EcVxozoihLBDHAzTWxMGd9vUGkgTuLGHmjsowXnKtKv",
  "key20": "3PDUjjCDhop7goBEGypfymp1C68GM6sVnYQYzQHmkdwZiEucUMYn964iqW1VZ894rknaj9CUPeLXa7JF4AgZX5CG",
  "key21": "bbdBivjaiMcpRih8Baentc83briNRzLJJw4PkNEinQHFGD7dBFXD4UGnarW7twHmg9pzV6LCD314VkagCk3iHe1",
  "key22": "4wgdJpRLkukuFfWPPoQEM4gkKrR1zfdLDjQaYHLGfjovop2Z5ECo8WDPKmMjVGghaPVUsH9vGNtTts9cgC7CXfDs",
  "key23": "SHUXXDjbgHqth7JnXUUvrxXZ7wW7TyKE2SW6uLYQQhp9c5FW3nmW9QkkuMEToXCkybxBfoCArEdhSntMRyynY7p",
  "key24": "3est52DqwnjcmrcDeqtEHeUAqdEv7r7s5cy88GDDw3WRzh4xicXMfMzxmpNvTmANEaYh6rRi4GoWj7tDP23CcWrK",
  "key25": "Bb1XRcPex6uvRA7PPrBkthRUkmciBJUeXaEaHcbAuGfHjkoUD3szqj61nxZoQR5Vo5QV5T5VkBYB3VmhRnfvMJ1"
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
