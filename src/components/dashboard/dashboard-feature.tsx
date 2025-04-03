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
    "ywH649D1osvEzg3n3XU1bV9A9ojaDQmxPi8AF9DoeTgQTYXeNnAXrhRubjE5K49CnNr2KKMw164orDL1SyoBVfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FGULit1attVzWza1JnHr8KGtk8NHE4q7oRT6qsPph9YBWeL8cQb2qUsg1kkw3fHYp2eDX9fuA73Drw78hLARAKq",
  "key1": "8PYYJgCEhvWbtjKqecNBQ9uBFhti6tyYQyXW7GWk9fDDWhZJHXraC5uxbNQTb6ZTn5V8nFiytN7tq6jSmmDKqeU",
  "key2": "bcpMBm7Nb2qEt1fQfPDtJ811C8Kn3iENxDSeFo3tozqQxELKGhmYSHDFanM6gvkMhDcmAwCQqpx4YHqiB5FZJdj",
  "key3": "2co3L7iPweg5UfAXbz6GrGjXFtLqesPV94LdwzBJvYgJuuPWeZs5R3TToLoFaAM15W1CcQX8rmWAXNSvChpCgfLC",
  "key4": "63NB3X7xcqgtFPL3fyBwFXx1ooUA8MzCRYMT8LCthJZWXSkXfGDcMAwVnspmUHYHUueSFj8CKW9NyLVbpi3HZPdp",
  "key5": "5psmYMkS2XpcHazqVuEubzfamP6w7ExJvpng7FPeLN2BdSWgQMRp7nbrt2fCqc8yoqFSx8Lob57pkubnUz13ZW6s",
  "key6": "D1NDTQr8MGJTVmbS8dbY3CbPJorxEReuyqrKMrSVxbtWKTBa2EQFkFgaMh4DfSksbjhmKWFy5XWLDevD5pbm3KC",
  "key7": "34nvsNq2ijCW9BFofB896QtkcFdBB4qpu3ftCRMVXZa1kptfeGZfccdhCkdPeUuQNaPwegzpwGPB4PjrKrL7WuzZ",
  "key8": "fpGmNYV6usgNd65pBKBkqivjZhpxnRpn3g5G8kbWUjWyDuQtPbqcS7c6ePeHwxsUR5GWV9u8DF8n8VXxYqyEUWi",
  "key9": "4t3hJgN1DuAjRvD5gGe7GgsySySCxVnBd9R3ACmU7gc74mykhZ8hXVCNexqxnABEUgbea5d4RjsuqzB9e62opSVB",
  "key10": "4TBEq33Fj9YxigqMUXroS4VYzzBkGZ9dDmg52RqRyS4LcR4aFzDim6TTmNubE65AbgrPUdG4kz8Arm24EQhLGDy3",
  "key11": "4c3jKpgzmNcrTQqYjs97FE49M2tSuJPcYDV6bYBfT4k995h4u5ZYucjGVyQKwqZKWdw1auAE3HTeh8Vop2rMbvse",
  "key12": "1PeKaY5MDtLVcDucSLBVWDjirJhc61zX9poMXPCbXbGuUrcF76JKpxG3PoEcQerQd687fvJrRGv5Xx7Ymsk8Kvh",
  "key13": "2U8GHZQH1FueYDYEUefudda8ervz2GACvu9un2wgR5KPfsdVuNbTpeY5nz9EsPs2AqRWHTG24PqPKBRs29Wx34A3",
  "key14": "4KdFfqaBUfZ2g69R7zzAZbEoySyCoxemE4ZMkJLPPaNSHaSzKtd9jxi73WdNjx77jz19NRCubFuW6batDFvW17KY",
  "key15": "2HUZhL5g25dg4c6uK5U66ezeY25vukcLTFCMQb27DDufXLed4iUmxbvvFcAGkZp5PDtLFhyQzQ9RMSxQ9SXJJopW",
  "key16": "4tHnTCwrkmK8y7MDTPdsWUMdQ2J3kATFqvWba8fz9o6Xz1aCxJtDbvcVxDXczqrCExpCNaFXuVUruwLeUdGCMf9A",
  "key17": "3Rqva8bQFimsPT3zGtCd8GXDG7pdN2C1PkrRoMVSXnfmHNpyU1YPqycqKtrB2SEjJk96twzXbDyQXLjzwBLvwGgT",
  "key18": "6ZQMuaAGgEVLpYmN426wAp8RRggrXXhUzPhw14DuWeM7A9TukUvASjVuWQiEk4FmL66MmkDu3jMBVTS27UqjH6j",
  "key19": "5G8A4AaVqAHhg2uVFfxc3Mz9oHGYcR2ApzGqv5SARnztTdb9gj29UMZ1D2epnuko1dNbfMLFu5PXrpsvxtfDTV3i",
  "key20": "3zFMHSp7KA18rJVjSDooRpk1xmSUWwpojYuA3v8mnRt3tBhMm6PZWqXwnub9Lz1ybY61sCbCG5caD6wngcMqFxAq",
  "key21": "Xu5yHq7T8RFQ21ZWueN5NMX9Kp84bF97cuViiitpaGckqJ2wqhSLwaCgJ7ZkVXbwUjdWW5smTo3ngyLcxTXDN3f",
  "key22": "4E6JAjHyZdShj4g48XdX8xKFJ75YHk8dX5JvqdRXDQDXpfZXikW4HZigUxAM3i576Ud1KsVec8xnr4cfUkNKH6vU",
  "key23": "5R5tA1bbQu2nrFgKaxw5MvSred29fseUEfiWNM6o3wgKpXWZ5L7AgjeFXiDKwG228Ukq8xjgzdzLKwJnQS1gnKcV",
  "key24": "4WjaMaB52p4E61LJy8tD3sej18oqYZrn4pQ1G5bWGGCGp4xmkjfB7rQnM1ohYfCm4SwzUNf8rjgMeuoMFco3Qvkq",
  "key25": "dVHYMeMwUh6ERz2Q7P5EjoLBVXKWzwC2uE22RRqWKs86dbNsSdDCyf78KEUcmJL6DUmpHFZ8RFJ2VwYZPdxyd5R",
  "key26": "5WDPS9g6ptYtGp51qyboex9qPDfhV666WGPGriqi69s5uuafMGTdChTWVnuSrLbTKJsnNqUHMHvy42AXTFxa6Stz",
  "key27": "3ZVmD2tahExtEdnfaGyWsrJmnqYFFp1s3JUC19Hzs5SvT1kbUzzdFNQkZqvdkZ9Fxv4tUsoBjcdc6r3jbhRjgBUo",
  "key28": "5QbDMDfxhUKTXm8dkR48EPDtu9GtkmTjPnnE6zN4F8W8BvSwEBhkz9jtvkqrstzbq4Ke5Z6kHhC1A8eB1jcAsAMf",
  "key29": "5iBQryL2QuimuhXeHnATCKpTAbkLJECcEcgeaLG1WfgmeAzjkuvtqhE2hw2oCcEdUmHaaTmgMTmFXdw3ZMeTwre2"
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
