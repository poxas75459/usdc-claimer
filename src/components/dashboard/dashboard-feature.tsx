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
    "5vrt79ufTmp3nsJHVL2EVVFrJaE4MEdp2QNNYT6GWdmLRFncLLP5Xe2uVEBsSjGNJQhhbgTUzssiWDkEEJnFcmhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x9GcVLYgW7ka1xMhnpEXRCAvwmvvJa6gWSr98JXfCnmT1FDCh6wH8CFFnYLKj8jQhRFMhtgrEji4hmwotZPaEd1",
  "key1": "4GUmGCee2jYGp4r6nfRPFwM3CPadYjAdDc52uxLWcMioJrCfCKfLfd7YHATMJbi3DjnLFouwh6y8JZ9Tqp8pL2fG",
  "key2": "3i8bvh2SCybZFYD7kKX36whW4LsW8SvfGkrqfCweBwyj4qYq8cHUm6CLfsfiAP3h96y3ord1s8S6Lcn4ZHhBdWu4",
  "key3": "Hp6CBeJFdr9Pu4mJjpsF6RvsLnMiR7d2fGSKFh6JjcDePqPuKHsyedBCrGuerktwWZHgfWBGbHSZ31a5cLRZ15b",
  "key4": "4ckfbaUdyUC6U9unGDAw8ZboDGmMTHQqgeJ4ThwBCXWmXTFDY8D3YV7YaroL3N43tDmttVrhTbdwVLV56uu1gTKc",
  "key5": "4DGgD7cybm2FGpBdVUCeiiKX3maSBDSvCtqKednnwutkxrJyun7en55pJGRwB9iGUgxAnkd4gtxD3oAeR4WR2473",
  "key6": "yuDaocA5TVRuh7Esci8qHmjo8banDKfSb3SfPAn4CcMXBN79VcdLdWzkJwiUd37oQENFp6AmrcXUtQohmHuw3fN",
  "key7": "2v5Hsf5upU65D1tGRqzaSohbiVC91NirFg5U3soGCtraaR8SP1u2pZV3zAvdDc5LmgSjmowu7H67pQDtczacS8Lh",
  "key8": "4NAndLTYkMmydEcU3u1UXyANUCDjhugUL96i5PiLPwc5rqUCRqdX3U3xA4ZgKRcFuFgAj1zXab1jLuXnMKMWQWry",
  "key9": "4LaweWPDLz1EAaz468Enu4xPt8icppMQJ8cRbD5zxRRbJqENVyzZXUHtyiHVpfbZeqMr3qeV6zRMpL8xnULiAogd",
  "key10": "3LHQWJ4KyLvxqtQxqegD2nY7KHoQKt78kt1LUVC6bEwAV1xNdZUoAX7vBBU6yJX3akMabKtPD7fttVxe1KN1trhQ",
  "key11": "4GrrKFKp2Bbg6fHnCYVKB381cyxwmFduDN9mj1ztmVM4V2NRdte3psXC7bXoUdNPzMx7f7UmcAjof43NNS68c1Um",
  "key12": "59PBsMUr743RWAkV2NH61wuHVy66kiuS1uDkV5mj4P1ykaxcaqqHP3uYm3zNE324isNtGrQq8rHCAoKUjy3LhBqo",
  "key13": "2b1AgNxgfUXsWvRFGsEsmHJTeLmD34JbiC8KD98dikLPFDK9roFMJ2BAm8iBDn2u2q1txDn2YtNRTtm4cNJTeJzH",
  "key14": "41Y6sm1cnTwRi42ST2DTCUHrFPXxhbK7F9A3HYjJ2G9YHeotfiLCka2fwkoEqQb9fpWRjpSJuYCxBm7i9KLgekhi",
  "key15": "5ygchD4YwrjLB74vWyroB8MVHD4wm9ZU7ihmm12EN5GMgbh5QCVLbvD8jBoQFQFfFwVbWuP81HWfSQo5cHKH9Jo6",
  "key16": "2RfCppEUE3vkV6ju8cxkmaUYLzjLXA7FWxWeZpP3ThJwVmSCFdNdEUZcWM7WvWXasuQZ5d2FCU7MHGKiGYXgP29h",
  "key17": "4z1zbFftVRbRDDmQM3u8BWsTMPc3jRU89EDDR54aY7UDX8NNBiH2rSukzsZuAd9JZusTiztzGfC1CaaPU2cjLEwu",
  "key18": "3UGca5D46KUnVVEwrt2RSvwB1rCmqQT7U6K4m6GXXt6pNXUbHK9Rkj9em8VNMTfGnbmbWEXQjib2Bu8nSv4KKELq",
  "key19": "5bv34azD1bwuDtWXJagRbTRV7acyyqage2gGzZfycrEThMaqynogJeXJFixEic81hudLE7fjLzzSrnUoJ251Wcqa",
  "key20": "2u7ek8UN28SBiLyqKt79Ff83hW87HWrZktcZAfcFvd1yd5thzATWV4qe5R1h9FdB3XALthHZvcWboEGtPgafzrdR",
  "key21": "ZzVFd6Nf4DCW9zU9nMEgh6odTXzpp3KEyj1YAhbiXiZu9kaEpizFJRaSBGHwFQQpatWGTdpdvXcR3b6k27PwUnQ",
  "key22": "3yk2EUXUWBGscknAX8T3UE5JTzwMZ3ux4nscZec7vLHL1WzNz3rPQj6PhcmGSZsn6stD6mtRULCcuvdU8eEQbdz2",
  "key23": "3gsRMsy2pAMjpX8z84vz5ewGLCZxf3dxR3TE5JaoJe1k6v9T3ZcBS3P51ZzA8JE2X1En9nwvoQCcBAZ9wdk1N4u5",
  "key24": "5HrRTcfQyBnsWsTXqMak8xRdqBYRKiGBidgG5qoRtC2vP4wMdiFqXBXQ8ovZobQs1jyBUKsjo5eF13qkixX4qGAM",
  "key25": "y1uhxsDEKTvbwQr6musyXBoeYehNvRNYat9jPmKoSp8DtBZo35i3zNLWf3k3zuX7e7oA2nZ1phNEPFHMTtUPqsv",
  "key26": "4ayxxf76Cq3GfdiXS2pU1nJz9yqVoMCcwbNh5M6vPwNDudq3gWLVMLdhs3xhnfK3SCtmMyt5BvgHzriZTrN8vCkt",
  "key27": "3WQpBrv3iDt8m2ghAfmSiAavSuJXyNomq5bfwNvEcFShMso7TQF96ULfTCWNGtqjwEsEcABP8noR5kx6mkEFn7Uv",
  "key28": "dWHGMCuej9T1YqJDCuLG5S1ADE5uniHo9fESZCnKngFRiFsWah9RePvAvYqTNsAFPkFCJQrUHUBnvHZS8NCzPoU",
  "key29": "2VbezRPdV7yjFiPZajP1Lhhzpx9XGSKaGUg1ibupzAaqzcriRK24Sx7tMh8rtDUzAM6YjP52wycdQdgqjFKMZKZE",
  "key30": "2AC7cUnthdvsLQaTp3GRQBGSd7anSRfdLmDSDXAfpB4eR7TcrZAhjhuaJSuEA86oV88yNcV3o32Rssxj4DC67oje",
  "key31": "uALkE5qtxeiryeSyzQLMfjd8CKNCB3FuEW7qpiXsntsHH7gWmHymjV8pJmrFz155uto9p9NbdDyEE2hYKVDF26V",
  "key32": "44qoP1JpDDAxGuGpNWubMZL4c55p7CVFTVB9QekRDg7BMvMgVoZfjwEXrAcLXyV83UxLJ46o9QfkVBphr5xfyiCk",
  "key33": "1wUnxjBzt6C8is7bHRbARjz1VN7EDTxiz1sAiLmSQX9CfMWaz51YpUcdtNn949ezf1QSzt4C9piAC6w4um4wfJp",
  "key34": "2ASy9WkmBKNCYEETrH17yypAYX9Sq8J1UgW4batu7gSz25bMDo2n3q4cY6Kb6cUa8oXU7syHNuTnLpkFGSdppwww",
  "key35": "PDZy3B2WKmhGxkrAAB2WiR9eWGcwE4eqWDTcaV5rK93Gr3xEDYFRbUzfx4vbpvwBMzAdstfMSPp2rnSPTDAn2Bc",
  "key36": "5WM4HLNa8K5BcmhoahMswaSZDzDXpDczwnhcH1n3SoX45ki66uTKaqUXD2XRdr6uNUPqkX2EvQoQmw4XT5b1qVTL",
  "key37": "24x1TkiXXQkDeJj2uJEvMvaFauo7iCrAe1v6PnXXvFJkBYsqxGkSKHM9RJdakjU9k7d2i66scDyE5fZGA3wVvBSk"
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
