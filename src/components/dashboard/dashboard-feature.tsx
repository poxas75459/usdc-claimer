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
    "5k7N9VLHh1Wn57RwGrwAKPzxjwSetF3VSgwekehN4zjDxVaDNcTys47XBpcXXWgvAtFaymdDPGqw3M14Jn8Jb9tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2isXbaNSvEYk5w2PF7gGcmGahUbxHF8gyRGoupFUtQN1ch7f9XhUnCNw97ptmNkLM7SoYsqT5bP9PqNh9TWSr5ti",
  "key1": "aWaWUiapyCMGRX9zuMkVhTSTV59XyS8CsrKwK6QJJQyQ1EJsWW5xEwQXpof5H2dK4C7v37DYjC6s63dY5xTmyRj",
  "key2": "2iavkHWz1EzLbyGF7yrppSaDySANhGZeMpKdiY1WBX9vZCS8EiPZKHXs9f8wSM2LTkYVFkoPYEQMcQu5w64czCV3",
  "key3": "5iGJKKfRedfjduM4E1vVoGPdi6rNTCTJtHpM6DDv8hWnXRA82cYCRJoxq4RRdWCjMR3RdCC8zEBekbyy8swdZMAM",
  "key4": "2MqWgv7HQJRBdWRWQxWtB9vQktFf4YDCpfjxzGGijbfGmMxLTqb6wBZZ7smuc7PHQeCHkTvLEmZfngGinrjWoVdi",
  "key5": "3hkrSBrmSXrKrNwLkgxPTp5jpMkv1xbToZYo2GpYchRB1ftozHE1mRDdEFnJtgD7j38jqZTxKNFrrgDDWczLqPht",
  "key6": "336NGs3LT4o2YR8FNQrHLT16Pa8r2342e7C1CUPt6CFGHEKTWF4R1SUSg7HL6MsyEKiS6fkxjcNfPdgu1sAuV627",
  "key7": "4YJiWSQpe8rzaTNtRuGeg7Zz6ZuCTzKMh7vksKFM1yLvQVsV6qKBsje2TazPdpuqCPLTC7AEqkESofHCUyndRbhC",
  "key8": "57kp6AaAgmKQbgeqbbxhijY1YXr2TUvXrh7nq9dmbPNUGsq3ZH8wL8C6bBrcRRsysEKAUbo3t8T3FNTpGfZQD4Ka",
  "key9": "RKzGsdrSc89GeoyBqWLFS6aLzHhv9RsgZ6TAhVczAdhbyZ3mNU9nEfhQo6LXt2c8Ede9gRC3Kn2inPCKoekKQjo",
  "key10": "5bF28ZsJvMuGkKz37fRW5D7ZWFA31hazvLZMMh1VtGPRP2eWjaaiBBU5xgsDP3KrFp36wzMP5RvnKXC9UtFZciUC",
  "key11": "6ueooBBVYiwRJ6bkUkaNfhhFQ7o3KzN61gmdWQnRPZ26xUqd155EXxUhUVYNdajCerM7AtYxFxBp6pixt4jKYAo",
  "key12": "2Svm57LoJRkXy7Pvk2uqcxNJbTmqUHJqEKNPeonT92dNaDvVGSxBd2nWdAmfq2z195Lo9KiUN5Tot4qaY4Y6G3dk",
  "key13": "31upfho2W9sw9QqjA43am5e8XFMz78xQufXURV7p4NcpRs9YNiaYpdxJNXZ1cr6BCFwAhfKjMygUrKSHJYrHTjj6",
  "key14": "4tabpVgwTq196zFwoQrdp9E9Ucs2x9EnNJdDb44BWc6HDWya8vCgpa1zmMkDQWUVi6hY2B4KV27rXTEY2299mp2W",
  "key15": "JFtDtCKHWvSLQpEKHpnm13v6BriFPoEgpYAa3bkLU5rvgsemDGYmnCVsjdLYHyRw5U5NEbJVnuP1PXYXof47xeK",
  "key16": "2huAB82tzdwN7h7SPBYnrQpUvys44bWVwouCRaXtLJvtqn8wMiwyzbLVW7RSH65CPhHfvZX753qRXSQRLmKh2y4V",
  "key17": "4DZRR7i4at5N2kBogNEjiKfop3F4nmuYWSBzNvy3y4rrzV98ukkR6FkfM1pzdCJfwX9Ea3Ni9LYYBm7Hv8PvcKr4",
  "key18": "43AtHewboaV8F3g7kbjQudeRCduk9pjcsnGf543LEqdLAuB4XKvQH9mnv69471cx7XTXvWs6arrj8q7iyrurDvka",
  "key19": "5ou9x7QGGrL6EnwJTUJxQXrPAebVbSFUbyBRGD1L1bqTX2RXcVzguanV1KmL8P2C4cG66oF3pAbiYx5Lh74QcJot",
  "key20": "4ouDAZpve3qgkWyVnPsv4gLY62BDxuv3wujrLw7esJ9k2EwfDFop28PC3KoNWz7CAJqwD12JzaXvEgZK3qdoy8vA",
  "key21": "4Eh191Ntav9PaMtpBXcHGzqcEPS4ZoPVg9MU5FbbrvGFQtFBTbTPQMRXrGfQHp27LxSx1tZDJcqawKqQ5NhuY3V6",
  "key22": "528dWeqJiJvStNTr4L7ur1pDNHvex618UVBo6stR8a8hM8T5byEuDWjJmeYPZZheaGKhyjQmjwSFNFhmiMLVaELg",
  "key23": "5XGEcTf9c6bU7ww6BGPDnKHHaDkg3hAb3AfqQad9fiaL9GvJNPs1EtL7Ky8B99MNPuRvvfZjjegV1L6sf5zhaAJs",
  "key24": "252ABraCx1c3XPRrw6TNowwghVDpurHsqt6BpjRG7dbwUiwD9CvXd58YDx6bGRphc3Lgk35jetySHM5pxfw1vGQz",
  "key25": "4YGf3FuHSvHsfu29ixmeyTjJ7sqNHMzYFQPRCovM3xxE874AyQeSLHLaRTLAd9FH4P52nf1pBAGymYrrxbZXNa9b",
  "key26": "5yjJJqo4t1e8VhF9RoNsCWdhaKnJ9nRysLXt1pejNFpT7Pu8RzU6NcQZej9Pnt5uoXvNv1NWCXC39LtS3Gkgn5if",
  "key27": "3gLEnZXMFLjJ78SkSqgg4N5uyojmpEeskmwanixkextZQEjD2VUzJAVMkqiELujDE67pfNgtySfiP8HgtsSZdbz",
  "key28": "4HM2tgygkn6jBXWFhSk98QTo3nqGSR6dXxSqYM7Yb6Fn5LkbapiH635VXHM2H5WvXcyBUodPx7FSj7Pjp6jxPFDJ"
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
