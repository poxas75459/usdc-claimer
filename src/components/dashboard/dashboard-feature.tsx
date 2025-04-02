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
    "5Lb5NgNUE7qabzXMZioULzH6raoeXNgCNNmqvs1A1qbaDnCnzQEXHJZfnqD3WqmGUNpaF9Dwdat2E1DCGuzG3GwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NQ7VLsGj1jXdbNdSvqnimT2dFoHPbqhxNFfa6Wrd8eY1SXBDCch6k9XgQZiTHUgJb7g6hvRgWR2pZKpHec74TLJ",
  "key1": "4opTGH6ajh7f7kMWzyJ663n2SFypUzzBerVQ58Aw9s9rdzk1ZfcpYZDMYAKqegzvzcrytrbtFqAQRfF2oZKrXRfw",
  "key2": "42XkLbLnaiL5r5ECLAX5ji4J1r7vvdiubPfSpi2UeqZHsNDrxGxDgUX1Sf1NBjgTWmkpsCAauPXF7ZkiJ8x7VTAL",
  "key3": "2bA1ujzzdaaa6Bt6GUcoft4V8RveQDGgyKGLeyCH2TkEFHG35gkWhMfq1Amg9GSULAbg8Gs7gEJwVxLNGrCEH9r",
  "key4": "36hY8qiRvBmHE7LorBJckqvFYnQNvBpgVHSyygkr5kzDStuhURQzny8QgkK8D3xeetN914rj9AAxTzPkGfiU9iJZ",
  "key5": "7yj4xwese9cbcCxT2wMnymBTGxTEmFP2UuaYAh4cTbZnC96TNQSzrYapMztKBFJH1EmtiiaSEj3xHE1iRC96iP2",
  "key6": "5jWmeTXn1URWWJ2TL72ipw1qMwtGN9nRzk5hoyECqXCErXxBMcT45dBpwDxt6fCREiGWAJ4b8HAfQp46Pa54gjLU",
  "key7": "4HqrypBUYZk13qrhZEZpi7tkrjGCJBLGtqSpzLV1VZqN8mPMbmEEZWDKSe23CQqzXWjRn2FtWukW4yn62YCWmM8n",
  "key8": "64e59ybJEbBW6BPoMuKaL74X1Tr3RqtaHXvSgQRn5KsaCrCWPugirApJjwa4MHxP1Vgu1M4wuWprjE93Zt39nrj2",
  "key9": "2iMHYqWKoViZHrvfxioHf3RwGDAGUun98sgPAbRTzM8NdQuRqsXxcVXBVyxeFC3Dp19pbwAfB3CmsUwgjxbobiK",
  "key10": "BLN7eXnWqKiRoHRjKquzJ273SZUfHrHuVZFipWxshqWF54P2L4aUWyxca4mUaAY6W2HaMafbesWADwqS8M8W8qS",
  "key11": "2xHBFmKLehsRApJzVdJFzWkAwJFyWo5KRwA4Z2tda29CATaadNJQJMwU2b7Zm3pZZSrfKddzNeVfRxVcCRqRDiE3",
  "key12": "5nTbGYcVPyY4vbytqyQUFDXa7GmPKoofjwGFjhpmbYo61Tmn36QZoUKo5Lm7ZonsVa7eTXSg5cp72V4nr81yzdQu",
  "key13": "4nUprVvNeTWkwb6WJPeiGH6MxfK2xBPMWtfFAZW9RKUNcJUHnAB3QK6eXTV6gpirEdbF5AHP5B4mT4TVR1z89aV3",
  "key14": "2Pth88YJbjHdm6oncAzNdH9cVuCYQ3tpPYKxiM123j9WVVw32vAfiVWYfADbywXfNn7Spk9dJUP4TUiwE9ky3vRv",
  "key15": "TpVb1nyJemoK1z9VwhYodrtqGcy6M4ychK33VQFoczouSDfgf3WpH4rTfJPU4FRgEhMaTqfoqArgjotTk6QMDKL",
  "key16": "5R8WrfHAcgcAntALwozMWiBGbj56S2Mc8ezguSKa7iJTKKVGPZegJWUSN1k5K53yPdvXSU114rtreEdZ3guhKiL6",
  "key17": "4ESzwtJAjExaFDajbQ6Y5Q8dorVayYwpyqPVjmceYgXuMAGWc5EecoKEk82yHDepZgkNkKxtQvXYv49rFTCVqhTi",
  "key18": "2omhzuwANCVou5kYmr5oPtxzQqU3L9cTwVznHGBtcq74CQ7tduSRcepytCygjRRK6GernMu9BsdSsdUQNNxiJwtC",
  "key19": "4gpJq74pKEnTr49SeoEQpGnNq2ueWArsKVpqQsarsnS8YY89hzBYaARTNXCWFMNbg3vyoSDpJ8uQadGq8vw1RYtF",
  "key20": "3Xv6zwffMgDbLFHyrNvTKJhYnPwbRT8JSVXrLgJaUiq57BeVn2bhHCUTqxRVz7SA1gbbA655iHgJ3oTehPVEoAYh",
  "key21": "2Ua3bPmvBW835giFwAwhvEajYRnKJLSpb49enT72jvjh44Yh3ThLuVXXFjMWVymeoAfPJts433vq1XoQCp52BoBQ",
  "key22": "4WDJyUp6EhfPybbxLpXwTpZyn7mtEiRyvZvEVUvUzMfgTqci9j3WgMeK2KSFbjT6aitxmkaPmBKvGT5J8x9eM5pz",
  "key23": "nHnqurHJLmuV456dYT98uxj3okW1HSYKRQDnfpKyLnRhF9C1zysmQBeLXcpMXMBeFKXn6xpyKFKwHNLAd8k6p6C",
  "key24": "DbkXXqUWWsKaZDjwAbzwrcJ57WXbT7yYNLYSRBgVyte7Di9vPPvWPkiVPuXKC1bQRvKRevuF6sT1Z6fAveVTpEC",
  "key25": "3Y4nWJi5hAvtMWTSPAFjGarP1ECfgBeScPRmPTSCZW6cVHUwys7LYxHJccWumkPqusw71Md7G3LFxseA8ysCX1v2",
  "key26": "4469oh1asRmS3jDiyKkSHcN1DvCH7fmYWnyyuXtGeX6JbWPiHoz8Hj2gWELgC7AwiHW1tj78pPaKhKoJcxY1yEzb",
  "key27": "2u79SkcHYpck44dikrdVx4N75sNLn15dfkiG2Zn9wygTGyw7yeeceFWZz6Vvi8r6H5e55qkREnZnysStxFv3dkJ",
  "key28": "4p2W3UFtbeNV2fjx8g7Bom2r215t6E7b2RaQ8whwqtFgs9KpmdQuvzpDH67DgAinTcrwpcq6s6vuVzPLh62c5MXx",
  "key29": "5DZxY8ihyAqfbBhLrpTV8biWTMFwVcq4AtXNu2yDFFMCTGkWSsskfKTokv4FEEU5mqKdYVTs8J5UrRxm6ykbBQxz",
  "key30": "3JqMwKXsyRhMCSALYzsJSDpnsk5Ni4A9ZYuC6DN8p6jJnqk1SxfSw8wndTWqM2mGmFoRJMxTDigBz6XCT7fDTKnf",
  "key31": "qDu1PFsKiBvcQsujjJL93i1vzNZ6svGSnGEbFtxY8Ao25To9nqTU1GgAD7rmmhQLACAANYRdHGDqrjmnoq52a1Z",
  "key32": "3ohsKCcRF5UbqbcaUu7fzpv8yHEmeoMs8QZZwdjwCz6mTgeZeiB6Z1ufWP5ktPBoC77WiBueegxJWXCtQ1H4TSmt"
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
