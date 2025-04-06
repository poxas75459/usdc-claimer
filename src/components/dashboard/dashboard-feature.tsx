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
    "2J6mKHUxfEkZYb9iy1DyZ7qh9QhwqaiXoAtnySAJLj5UxQ3sFvgauajujZ6E6e1xvyhLcpDxFw5B4L31K4PqWbYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aGaXKv3XXzuaJgJ1GLGBjxi3bu6GBxM3WSdodinhoc8UGCApF9q1ejqmt7JFcxikUThSPU5mejGnCJwyRYzpgYm",
  "key1": "2xMv93hSNdW6KHvrZVNSrTMWCZFzLMcRvKCveugCkLQAAuHCWfUXFDksgrJ1WBBCVswfQj7iB7RmrwWETkRLewwK",
  "key2": "23wkQcWtz7zJ3f5H3DT8CberSyxu7xeQrp77CLt6aby54bGrFAkpd4BpNqkLJGcK8UwVRn9j6BXuBb2UdMA1PEc1",
  "key3": "eCzTMkXC3VpDpnYV4vDbScXUgmgCd2wfkvmgyCAha5NzZ9h64LcfmpVz7cnLK8bKpU8N6jcRBPbMJRMzFa3a3GZ",
  "key4": "66nbveAhhSbcoiEpteRYP7irwNEpcVKR3XtKoCCqdbhyzWqLpBUnzvw4Wg8aDbYrEF3TavFWAamte57faWvDhA3D",
  "key5": "4k4NSP8drTuj6Gtne4s9MpSHiorYuzouUSauNhu7hATvB7SXGZ22r6Pj1xJ3vggvpo7xsB51uYMAThof1b6MKwo5",
  "key6": "38W2dQk3haAgFuCftevJo3TKikT4ZxDZcrRjkrhccbEUEsUz8bNN5nofHcpJvtmXaeTmyXKuohPmz5bk78fJ2v2m",
  "key7": "BE8N9B5gPAqj8wheeRPq6i4uKVFGD9mUJjxdLXCD1CXLSQ1svDBKfcuVEkPK317eGRHKddoWFdJntRLydpM3ec5",
  "key8": "SMpaBrunjDQvUfPsUUSKgWtqek7UNU5NJfoCHbvTbxLe4tEFBtyZVvDYJ3dVP9JM61zoK7hSDzEs6Pt8RqUAHUB",
  "key9": "CGyhZKpnRTKMoerQdAebrZkMpQ7Dr6p6Q58NkYvYLLJ3GrAFy24MxrLUgnX49r9tnrRmafyCPV8p9VuZgeAmhHS",
  "key10": "5ET1pLfiWZg5B4JSsVua6vv882haMAv7BUKTt2QxKUDEPLeLhAAWvudrxDxNqD8kbcy3pfwHDzQ5KXUTQDz1eXnN",
  "key11": "2rvTJERkfGhp2tmzTcF4dFTdWW4QUSnu6LLocDC4vh9Rnj8P5VRd2jUwyouEufhEJQnJvyCUFqhSEdSVKQ5dikFj",
  "key12": "5vBs991UbWRxnKrrBQ8751cc5JkAZkyQmsto8dyNcb9ULg6x62gh29WEkrgj2SxRLaZo1MhDdL3sx65krjVqjbFy",
  "key13": "4MwU52toBuHobCQLtd1m7PsnjPUqp9Ay7AVLqJN1HUssKbwbotJLq8vHbq8MJTyeAA1FVaQV99w7MjuUAkFZFguG",
  "key14": "5xQCVhWZydvNSoPte5GmjgmATLRF3zXgXSLa26yYVXBdQJ7Fd6V2UUcrZoT6aoKABrUhRqhVWrAyX3UB77gVe7eC",
  "key15": "4mZbXLVuTvUdiVCQBiCeiw6F62nSv7GwUrUUwodftwkMc2D44W4hgxkVALa38HsfYCKNwE2RsyXWKE3GbqBNQ6hr",
  "key16": "B8jK8JJrCozSoWhAv7JAwN87siCVUnWDRJEW8nEQFKVCHMFtjEYDDr9Fxnp1Y3fLY6kk2XFoynZCqHMK1d1B2aZ",
  "key17": "2TmCdYyE6M7S3wBpVPnhLxBCvh6k3Z8nhqMSagownquPC6snhPfG9NC3dnChtwwWQawKsh9G7th3S5N2FJ1iLXWf",
  "key18": "2N8MR3WMKYfgxaB5pj1oSC9U7unyq1na68c4q2UstPFpQJUgaXzcK81r8mz9wWsFjuwphX9E59fbqFY7P68iJ6XB",
  "key19": "4SoqY9SWWy2AqSbTXMbhKzdkgEz2ivrpituJMDkoEJdBYqb8StZ5HkrDPjMBRpb8RjmDK1EDzdBuzEQdzUDWPQFw",
  "key20": "Twm6DXjXkDEjYanifjxqfpuE5UHs7mkpJeZdRimnSo5YhiUiGYkNaa8WphL2DogYHYDF7HX644QEXKxMNCZvg6F",
  "key21": "bVa4km8giqtpXHA8NaJ5dnFm7QeK99DHq9tKQDs41krDgUUescSCjnLBgFS7cEgY2HVfNZK1yPwvGgVhy61CJ9C",
  "key22": "3JnRu24FHReNWmA8GDnagiCX1nmZiHpbLTbVC7adGUvMGD6B7peD2D3FnhxaxhBYW2sFDhiAfV7wb6ra6q4RCNtt",
  "key23": "2GP4QkaSBPY4C6nRPkoZ55iNxpm8FeUHUjj5E9iP4N3LBzCHCZ1MZJuiohuUCADGG2qJRi3AWzyjFxDiGfSfQtVk",
  "key24": "3RgPDhsGhqDskAzm6JSprP5LCFF3zRcMvH8bmjLmN9qZ5eQCRguv2hboxgJFwzvKLTvQY1xQRH8L5AmpeMaJJ18r",
  "key25": "58aiQp8eS2BpRyJnLaj3L2iwoiEhZzH9oEX3WHSWfEbKjwJXM1FKB1VBjQiidizwugtpGixKLtFJfA6hHkFz4gVz",
  "key26": "5M9zNpfdmpMGm34MJehPDHT9WBLu3kDMYVvmYLVQSybrCuaF3GPePBCVKMhKmADH5hncgMbJEwNzaEsP1YghX7M4",
  "key27": "W7FrUzErnwE4ufJrTRhXaUTwRm4wEvmzu1oa7dPEjbQZUpQdYctJ6xZ6hLMpJZ9KTtzABdsv2NsmS5rthytgMB6",
  "key28": "4GcZW6eQy71BcE5mmkTjBxzPctrRZfEjj6ovkMQy8WX3whv2jpGJLvTPV8b8tYTCpesBMDiakZKjDyTRfR9X4dH9",
  "key29": "TjRJN5Mxy1uAiJK8Mtri8e6g4LbM7V7LqGJixLayojWWVGiFvvdoADXCLfqxDfNnz4ykpdKzFmmBBCWtwsvKg1C",
  "key30": "4U9xnpAzqhoHnsYQbTd1y3eBhrLTKRfMSqdqv539FdBLwa7t6RTsNxo6B4gb5WBjo9W4mN52svdS8YwgKnZnkwm2",
  "key31": "Kwt2Zbwh7u1PhsNMbSEGSPCFVMZHkuhcrR4kDG4Ahys9Tb5FKpJrxx7toB8ZDtZQjkWkmS4LdXtckcsKq1iLois",
  "key32": "2oSY8FyBK9E7Wak6DJPdrLmyuGz2j9xkAAaoKjZopep3ERmbPzHtjbwn8KkAvwevnLDV1pkHHWWCLF5PhDzMmcfc",
  "key33": "3L1nN4yazCRfTiRTN5Xxx3M6sW79BT7wMpArw85WRuDUDnkSaCRodzqzj4VJY4zu2MXxa8z1GnKgDDF8KzzDgN95",
  "key34": "322S7xZmDx9WMxmhwhCh7awpsPFfd9GrLqtby3F91G6gnCtHd33trZAjpHd3KxqKebFGM49v3wHYBoQU5W6Wg7wd",
  "key35": "2RHjNgMGLj2kjR7bTc2rotyNSkjdzb7VrsvYr9kLyVZxP5YoGqiE4JPf8DuRgKt9jxuBymKxutvf58fthtSUGEo9",
  "key36": "52YUrEwwGVY5Hpc2fiBNzGdd5nwyKykuyjqu3bX5styShYQ9Rju5P75PFh76kt5taCNAs1FRLLZ53YiLQc7uAubF",
  "key37": "46oqQoXEVQADcnwWzEqGpsaKBrDKbp8ckbc14vnB8qpdJH4wmvKord1LYxtNy3y8uKEq6xz1taVQhP1QgRE3CrqP",
  "key38": "5KxvhaaV1EnGVUZMhAYyaL4hvGLvjx6mr8dpRDaEqyQHE1dezeAXQBezAk8CcUBKeDCQerfBpkfMbMZ21PP6MDsW",
  "key39": "2uTKVMhQ3EC6utYaNzPQkbXxkVZVTQ9sx55ydr5sqTrwozWaPbeJs7WTEDhS7neiFkHW1oUWxqEfxQRW8pJxS99q",
  "key40": "3KDdXqv96kdKqiDPiBpGR45xVfKAxY7HvwNifSGZZ1WYd46cDV3bFuZQjXAY1Tfej2HX2AnQ7cidJkn5N7YKCM94",
  "key41": "4Xoj2tmkQtWS9JKPphti2trozdpGpPL9UKSjJzcouyisURCZCHZCC3LXFQL4sSQVuEeMXr7ToRF9zMhFDnJcwRyK",
  "key42": "2KbGb1GpMoNeVRcpmLtdZ4r1fRpdZnFinsiaYaDBHjxh3aw4bJAn43fLsugLs43x5R6arPX7LqAbcjgWYudrzgLN"
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
