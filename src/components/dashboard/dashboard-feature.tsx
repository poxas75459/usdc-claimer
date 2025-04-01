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
    "2DYLQqxun8QAeNFQudmLpVYjA3RmWGcX7F1ddcZQntCgKzr7hpxFRhSa3zUyiZCHgGhyu1arJiu4zRGWCKbcLT8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a3uZezgMbQ4BbXLGKeQgPsWBE9QQVnN68QhMC2KktDXuBJ31X5BMffYsfSdXkSMFxNpN7XNJvhkwvavjXsAm58J",
  "key1": "5iGHgXaz1LE4Xj19AuM5H6H63F3PRjfws97HD94U6wPNbhoV3hVMfXJhKUcbHpsHMNWqkDqvoj7HTf31mQhsggPW",
  "key2": "5761M4ZJsBmfrKfAdvk5vFQSpKykdjRdxM5EmLQkpFS4v4gAwuHNqf3bwZCJLRW3BXUTJBEp1dogddis8y6i6uyn",
  "key3": "4jiBtgWx6nA3RL8H7gWUFPD6n8CyqmoahcJmnSEbmkDTZDpCv3Je65dCRE2vkgC4k7Tnb4hwFfgzKS5grYiqHu2r",
  "key4": "4Aut7dLxSUEMpAZGs8XSuSfAqFQ8dfPrYao5NvjDemuQgBej8v6QVTtjA8imknDxW1FaohXRw4kbg6kVEjGHPZiP",
  "key5": "2dLfmBoSa9yfsS4Gx9qSN3cjDEpsgGBJ3SdbPoFZ9211cUbnviawhwbk62K5qcvdqcsjURPRphAimSPq3sqPgXKA",
  "key6": "5xdxDoVUCCyGzTnPbqns25SoVH1KBypeiZP6TSx9AixBCwx4MWJXnFaEnziwyEBEvAztbeHXNb5gtRizzPVBpn9H",
  "key7": "2zy8wtP9Q61WBkrZfCtt1tkQZVVMNBhPGT6mMQpsyLRbdZhxzqmagGn1SiPY8o2eeepg21Tug6UjREn3q6KRdngc",
  "key8": "3LX1sb9uuK9Ay3ExhBe3LQM6Ehizqz2MY1vF96ZcHi8JBzuGeqX2yiB7HX2nMt2NFLyuXV7M6cohus4j5UMyZX7h",
  "key9": "3fNLFGyEbvcNLPdWQjLs7ejsDiqcJMHv8bKSUxeCxtZiSdMZBVa6cCm9Z7sqF6z59NiKoEvq3NHuUPW4Y6TaYD5Z",
  "key10": "57RCkC6u9G4b7Wf2PZBGFC8MSXRmM1LrGXn84AdxLc8iyqnBRGrMkc5MNXQQinzGc5n3kefViP1TpjFxXnqHEgfA",
  "key11": "4ncmb1c6H4evcthXuoeRD4NWCSAQLhYCWi2oH9ZEKpuAeCxxVuct52crhE6o3B4zjD7nRAL5cJFCRr6oDNgDhzdJ",
  "key12": "2eh5xdPpq4AHEQwAaGavSAVzFbVVACNDB4qzrKdgX9VYmwNrWudf4X39rCnc9e3SqZq5C4crAvxwvjR9a3f7kWDa",
  "key13": "MwiodQBZ2m5sr3qRZps3Vk1gvT1LCQo6pKbvj1ejfeAud5HE7g3TPrsBVDmWCFSQYuZrRmf8kHDpiHbkCMi4Ho2",
  "key14": "4CWLCjXvNzSG3ZhsWKK2XKzYRboNx7o1Jw5g8u4s4eX5VrypW6Wz9FvKqvArEELQZoJ3SwRfjPLDYfiqB1PHSpfh",
  "key15": "2ML3aXgf8GYTWS2HgG1sv7sibFvczY6yzpCdPwDty7P11HwxuXGMjcR1sY1AdkhvAKJggWomug39XwQBY1SoJfpq",
  "key16": "4rs8gQFyJMFG9Fu1duZPumnGHPaUUFKkup7EivtLasvugQXrzdXdA7NgbiN2pD2Kc3mx19ccr7LEBum1Q5A2tLrD",
  "key17": "4X5EN4XjbwXmWgoVcQiovTs6LyfS55iyPhbV8yDAH8hsrWrXktguw8iXxH7AETWPuKo9tCGUzBDZvWw3dAxgRhxL",
  "key18": "2XW3RzrHrsHzkb69dvdJFVLdrNsJvTtqjLM5m4gPosgxSkqgsNj9UpDf5sqSGg2PdwJ3z1NfqwBGdr4VMXyRQbq6",
  "key19": "5HiXBQdmu3pUTv1N43FWJhsdrGz3fJmUDzHeMCXPyaZ446wGQWmR5pXtEfE5wtwWhiMwPbJcrhv259bvioetzaC2",
  "key20": "5XBwFq7Mo7vxJn4fP5Y29za33bNv6nrJYYR2tMTRv7JMSPj6tqSkFzDGi9et8VWn61iXaNUd4FPwM4cHuLYKmDPk",
  "key21": "2xVqZMLwJaf1DrLtrmMnQTF38okGUNBa4La5KUM8H6dnEZ9pkxXGvhkG47s4NPJiKBVRgGWdP4TkqYoZVdB8i9j4",
  "key22": "2MR7FRpM3devFutLkCM5Kx1RWyMNdwpvVLUc74yMC55hby9TDiBhN2JxdDLLJ9MiYFsB27FvNtLQyVbZcfqQb51a",
  "key23": "5kVYKkBq2WqowVHdDd8WyRDcCQQnMPzEF7cVCyZizy1kiA6TMDfSJLT5RMLMDrtQhCLqczUnFP2GGzjTP6SfaDwP",
  "key24": "5KocDaDWoxYoiqr8rdPxVue1QXFsf6C9URjxrw2y1EaAo6RNkdHFTBwCPUbxFuWiDq6CySowYv3nG7DCC2BKt2DM",
  "key25": "4yYTQzJS2SHtFR6weLp8ekLbW8iPxBtCsBwVATgDtNbZ1BELBrvSh2t1KAU8JwVf3iXNgdMuV66zuDYuXPdDTRnV",
  "key26": "2vyKw5MgTossJ9KFsRYH1E2MYdQoA3ZJTTgA6hecCnjtyb1GVhgu8tegmSQorqinwSTQ3RrMoCEy5GXRmvUmuWpE",
  "key27": "2K3dhtY3VeBjscVVN41tfpVJJiBZDpWZqVgAX9sMg8PUe2dGZWAaecHg3ZgWdMMoKrAAF57hS4N6ibGWwSQWanbv",
  "key28": "3ozWV2Si9qyfyWqivFmgm6MFNCy3cTGUq7chkhqZdrfcGmhcJNkyh3Fzr27dWAY6JD7khAS29HnPtRC1TTv4AL12",
  "key29": "xMmMFcfGK3PY5JZHVDyfKDc1qX93YipHiU55GNqT958McFigjpAvF8h1WSjnVfDdgepcmwwfsVVv8c8b2Z94DKN",
  "key30": "5ZHLyLufGti8M7twpUkpwsRbstLAQPrV3XVMNmorQ86R6ZSEXnTocQd8EpU48hwjZcD3NVdXwkSYj8Cr8JhuNPxp",
  "key31": "hPrHW8He64dHydd2rzQ9Z4mBofbim1KbQfg74kF3t3YpuX8DRKkbBxXGFB7jMDJwGDr2BwBsgtbM8NzxYpU2aP2",
  "key32": "5UwRirxE3S8whk88bGV5sQZEYKoiMtUirZCCv8mt1VAben3KLUYmmrknP512i7ZS6rKGqnefgriRhjnjxW42Dfn",
  "key33": "64FjKKMj5NikpwpY7464jnGg4SVKzp2H8bQDo8A1xm2x3V31vaztEecwQMkwT85FtsCLB8MDAZPMkoaDt7pzNvJJ",
  "key34": "3zmSJyfLH15nJD4zbtmMYoGZCi1SnMXGxnb1HxSeN4Qxpn85Av8mDeUhHzYAEPn2KJNFGkh6atgVt8mCqzwgj7JN",
  "key35": "5FV4APNycVJ4y9dKoigmp4eeqcpW5XzZhpwNHF1PVuHPXD6LwbHid2HVKLowBq2LbPUszXjyJSTUZPvsSVobG8kv",
  "key36": "5DWVn7sdP5eF23S2Ta7FybFgN2Eg3jpD7uoFsoQoc6BAsw2VgyvLAB4X4g3TCuD7cwokMUL8qFsJPWcoZ7WHiAMi",
  "key37": "4SjXaMgiK82m7qKCSi64M4GjubrrcQJ5aTvy6jfGWXwEVf3GDcdRp434S9UU6sN71DQ7ACjXDzijhziYoehgRCvk",
  "key38": "3gxWpvwgV32Zco26ChJb35chfb42VVzAQh14r4oTcBPQSQSkuVzJ8JmLVLW2xWHDqBRTaNqo9Qii6pUupdrtZ5gp",
  "key39": "eGF1DW8zAXaEcwZXt8UXMJCL95NyeGLeCVFpScfSYZ83tyYJHNJS26tSrVEYkghEpDuksB8yyZv7fyNZ43MTb2q",
  "key40": "NGaP2F2ZHGxRoStT2gsj8uxpBexZYwWX9rz1WTEe5hXy9cgNiYNmBzL7oukv87nSN6r1gZx2bZRQzaoSL8jMC3r",
  "key41": "Zy4d5ccuEidftT6SiHsj2muqsJpFrEXYKNdTGssuS4k55z6FisbwLwH1n74bPaAZsVLudzVHWCmZWvPLJHystJc",
  "key42": "2isY5fsbv8VVeVnAem1QqFhM77y1R9dfaeuDPcM9JmE7JttytSddMLQZ7GJ7nksNASdEJNVkn8xJ6ivSdoVxzEoY"
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
