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
    "4HuvhJqy9EMJHQz7zLRaKmSFJAGHTFe8iCDy5JJdwLnsDjKxdHi2uJU8E8Vz5WAJHR4FfbW1XAZzn2jD9sXbT9Go"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45u6anwcy2oAhdsX3N5iCJX8TLSS7gK7VPiVuCAMUAugU3GBKGEXcCZrWbsWwHtVHug1ch5b8jumZh4JrGKKpnmG",
  "key1": "3eBtfPkZnY4Yz2Cost7Dgh2a1mL1oRd3zLWFrMZ3zu36fB1ueufAnv1e2EkP1GpzyRvYoaYtQjqQNuefsqhGb3eb",
  "key2": "nD6EYkMCGBPpCBeXJDLJEdo4UEQgyxwrZA4eGGmsSzxErp6Cebb6xduryZMtpxhX9oJ4XHVgmoSV5vXgddeshFo",
  "key3": "3AjAbAWXKDAUkyGWG2DhPeAumADJLin5bBhYqakHqYUwz9SGuyscbLspB1kk4anYFWya4w6WgbXuiAgkUhzthNk6",
  "key4": "3jCxkQrzrixdmGQ6AVSR4YUJduUMfHuixf4XsEhG7QSXgXJJfBhiNuBzvCpcYfypg1zXph1yrAGKLK4Rn3eaTuDe",
  "key5": "3vm8Na1bgoDfK8tmqk8WtCYSipDwDvtoYV634T827sUJtYdDLgiY2JAekNrC9u3DwbyPyBWK12EwbDRsfNHRqW5y",
  "key6": "iTC4sLL62gdiD2Uev3RN8xjKFEMAydEpT5RaxuHopTz8C2SjUmfLeCizkCx2CbtMbsigEh3BVtyTBxmicJ6waiy",
  "key7": "4yUSRtfrrfywmnMbQUNyfAfXHBxyhtRsUt2z8LWf4mheU5xqdjBWpvGUPRfEkk99kGUhGv3dZKFgcxx2rbAps6mW",
  "key8": "2seePHHBm3vWSG2hHLxi1nQR132KL6YRZMk1VsZtTShnDMcyX2jbAHyLMyKSUvNusHNzA6rBUkWGfMqHaVue7zog",
  "key9": "2RrLhirsXi7B7Z7y9PkkerbVhHn5bBg8Fze1QVqa3jAJGdX6JLVmx89gEtV1kVeNAstPcdozCuBoNpDajW1zuokD",
  "key10": "3xQ4JCsCyQY8jsF8wUR1QkwWxKtM6XDaWH17c5SSfczaMrNaGTKJ3hMuzho12gbUijNpwFzBzU7sW1xSQo5CW4Ne",
  "key11": "2mnPpoWf1sN9uny31CmDaZgJasstfmwn9aGv5uke31euxf26KgfiTRL83YbK8SyXcLKqXznXqSvvJrvJdDNBmem6",
  "key12": "26VUhhizVTn1ygD9xGke1H5Q473c82N8mnUuVjNt6n3HbZgeFSEjUji8THpBb8JqwbUcZqDmYeNsDT9M7p4jhgYZ",
  "key13": "5prZunyHaLKyNjwEgzZJtS9LKNEm49zoa6ZmF29zQyvs5r6XjtqZD2PsML7LgDakViAmWAme2PVGaRwm55hGNiCe",
  "key14": "3434rs7sMf9xvpyTja7un8xNDaHHLqAbADZk3Sp3GZPg6wTTsEZGbSo9Z8XqvuVFtD1bZf3ndTTAa9JBQcwmQtPe",
  "key15": "5ymj3j7HrDfz3kWysm5HCDCAqmCCg7H122TaaBqNTPCyEr8tBg3Hj6UiPbGCGfxfNpQtENjA4xMddMQqsPbMYKr3",
  "key16": "2GhukQ1cqfmjD22RCA4XziTWwEbuXH8KDo2B265EXNkSs4i8yhmcS7i54EhzSGbQNNBz8MUtddLZhLjAyrhNc3AW",
  "key17": "5CeaRkL9pZGqBiZuEWrk6M4JS32skg98YKmT3WnskKYndwmUoYJLE8eowPx3kTuUtBVUL7p15a7QNc99RQQC7Gro",
  "key18": "X12UkKwo5DktbN3kuFqx35faemai24qcZUsiSpqdtidkhGJEPr7q4pWnK64HcxX38WZa11s2fxNRdJ72egvCymT",
  "key19": "3K17BFbXQvAbhYujJiJbYeUwqfTtd1cTkB9Pab233VADxzuV6P1246MWdwGxEXJTXWcwHpuQPmtVSE4EKvneTCeJ",
  "key20": "3X2sJ1izzz2cJG2XFKER3CDKv8bGkKeTABwqrGVZq81beh3LzB1kDHT3VK92EciawRDZc87grcLcfviMiTzEno4N",
  "key21": "2haqPuJ81kS41J1fMADe3WrhFBzn9eXdCc8HbtX9wXRPoyU7oYhn5GivPyMBkg1XMqneDNa49h7rTuGRkH4SebzY",
  "key22": "5KeN6YXGka2wqafCoTK3MsB2J8q4DHLEq4z2xbfdxsnUnw6oWpyuyvJTi3K4mhBr2HNkXDdwFZxAKXwwdmP3HbVc",
  "key23": "23ShRyc3RmgcsohMKVNgNdLUKqyAKG7QzZGVmiQ4eGBggndENC18S2M8Vwyb9C4ofesNQjMN7oE47EE6XsR9qppx",
  "key24": "GQs2dbP3BZ9C5u3QCFb5eYuDqXS6FohR8suVhHVDAi5mYrxW5viuj7bbCfiGtP2hDzPwy6eJU75rRPFheJB5Gev",
  "key25": "2Chyw7EKCsYQuKBb1KARbggyDvH2F2KUZe9YJ7E15rsXEMJx25jgekDEcyXA1NFkqQCor54qasYxaSQgji3UcaN4",
  "key26": "3NmbVoxjpcgxoPJHcmdgk7R1vZVLNWBC9RQ5mtB8NvNDvgcvTYfJ5MCTD8mBreCndsMfVeEEvAkjC7PMJnuZqgES",
  "key27": "5CqHsyKB5qyW9FD6MyrbzFmwp1oFhYHjMWTKtVdpS4vz2wLSnruDUXhJ1z4DKJ77wHe9MNgi79FERqzGrrUttUZF",
  "key28": "4CGTM4p4RuZN3d5ss85Zggp2EJUiHu7d4LZF3CwiirLtdWHDAiEko1L91epmiAhStbspmDXDnSGKBsDSc2qWmiKZ",
  "key29": "2bsMszxC2V9hxBpBmdnSjqVtVE7Cv5RW3Eo6py2bNrzXSHtU8H6jthmtNsrL7achooaxWLd1AxCKBwKvCaaJAAMZ",
  "key30": "3rLL7VWsDdCjxKPyiNJ9Y6C65WbjpTmk9dtijd9uQpRUaGSYzSn38ekT5tdYJP8D3etU59HLWipUqefHFZLq23Sw",
  "key31": "2sveajPb1s39eakvQce7romGdPVE87izoNyNanjCHjN9QkXF28VfoUHqyCUX2LzXnjuXLQMMZr8vUGdM3revUhkq"
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
