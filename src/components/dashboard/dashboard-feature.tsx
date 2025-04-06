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
    "5X8M5cy7wgr6oX9hBfEHonbWti2FfB7ZhUij46bBk77FQNjywnLUiznTPbHwaABzMk2mQd7Dn5hVRXtMcdhfRaLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28XCTbevFQboFkug624A1cd6K6VX95q62SUtFqYcBMg3jfx6yVjWPHRYzSquFpmgQgkqkvFmeJeBsrDf8RRdf5ed",
  "key1": "4ACA3EcJoLEMwHMLVGCXV3zW9NjFRA9r13zDFAVuKXDrXdGF2bnT6v8wTLuhxDi8JAXj2KnK4DhAQkN6eahyYUn8",
  "key2": "2FbzeQDSrnkUxwPZpBiETkSquuqn9o3gN2ErJDJNh33YVoy9aKQoUeoUUVBhioT2z4AKNHHjaYSKVbWQLMAeShoy",
  "key3": "4z146pnQZgyR8kcW2EBV1hT1akGjVXK5o4ytFJpJ9T7ztEYAhd9uvU11TeYtNtmLJtxaoi3NSoZX12aHjS3oLk1J",
  "key4": "4naxQkbSnHrArK7QtMfCSgi7fuVgQohLTe5rWwCnKRbphcfUq9FvxdfArZhViq8Ssr2rK1RpgNtqijRCK2vVfFib",
  "key5": "3RcdroZnioyTRNeedUYePYtohV8havGoc2GZjNMkZgcaGr7PwNvMMpCMgH2Zto2QSAr7mBpAP43BD8RBN77Wv5sG",
  "key6": "5HKW43wn5Cb2276Ta2UP6zQKYZ3pv4zEYj2G91Rac4DAZw6bPBdPMXVHsrqCXLTnxLExLXL7am57Sc96wbWoJiv6",
  "key7": "3gj5fDqtw89jn1Zrhsvo1aSnAbGCKywdNgNdv9neL5Fc1kXW2NAZX9Xbmdfmkku8dgCS1N6Acqu4c7EoKEB7gJyx",
  "key8": "37oUpQZ5ockLfumoGYFNc3rpsiRQoUab5CPLtPoVaQqfNKGXzSfiEoF6dkqGoZPSWs2ygHCe5BpAVQYuQw6C9LJf",
  "key9": "5yPXLzcbudemMnEwV5mN742pXz6wjeqtW6oZEUBR8kSkY6FpDocrcuvhZirkVS3v8RA6FazmiPwbCXLz2UkshhYF",
  "key10": "5jsQGfyJGZfvj8zqSsNp3jpbBWK6P1evh6m1Eskodh7PivcCJtHc7R9VSj1cFvSupwdbJuHx7Y4ifoi9C3jgoAMT",
  "key11": "3jitb1vgvAhb13p2Yxiqjbkw2iBAhj1hXAdNUSwmBz2caoV5WnWWTsZRpSwb6KtxvAjJba4VztdMVg5yJhtuoDh7",
  "key12": "43mV9YdtG9eNWJrfre8jFeeo3m9vpPXmP4VAah3gKAyLGpsEhb7XQW7JvEibdbtic4DLNQFhfVZyERXqP7SzSHgZ",
  "key13": "27mv845dA3RZ73caWaBq7bL8vBeD3AJv7wBhggCQhjs3eaSbMAFgTzrHcZ6XmipjPTNsWuEAHVpXRHfrkEznHNAF",
  "key14": "5HBd9BrSKQ2jutAMer9gHYK12STXEgV3neKmadoq7xUTYGb14tkxwmSXjSzYns8VqBcVvxbiYAACHjDcKczqtDpw",
  "key15": "9igQG34HRkQ24ULfa7Qj624z82gr8bDfWsNw3Kt2ScZANJmdjYchcSgmsGEVLYLYmQ5dJtQ7QroZWBMgE99HBo7",
  "key16": "4KEv2qDn2wd1E2ZjtcSUfwCU6Ka8w1SGhNoUycPh5pQWQhtTVZt8D274mnRkFuKU3ViJGUxCiy5AFMZsVp3841Hd",
  "key17": "toY9Kz7nPbswUUemsNFh7yF5HjXWLH2MXrBjMiXrEzazJLmVEitFVN1L15izkxRxvFamRnUvdaZeVCxwE6Mu9dq",
  "key18": "5S7yJDYZUCspQgTtLU8mLDmpC4LVQCmXPugqvvPj4SzVqNZ71umLJc29MRagcXp1kRSy6zeKQVJo1wGSBhZSSfTC",
  "key19": "2F8P2JKh3YThWGNvYsZVM8bcX6NsBZyTvEaSNxmLSnmXDn46zvFr9RsFKPpQCB8Bkabgvk27wLq8nZjjzRhxqx8u",
  "key20": "4JnZU1HVVZoAZzHQXLjNfWxWCPrUwCkS7EtjsygGLZP3RXuW4TBDX9HEmW3xibhW6vBGjKcypP6pw5e9YocDNULC",
  "key21": "2otoZrZH2j3S8JuiDR96JLLC7bUfrTiEEMZWataCWtyioqVYVkdscVtWvBDrw3nhwa5C288hg9ozY7hgSreynSBC",
  "key22": "45BF7XM2onqC65SyMdizW5pMN9byUfxpZUTRhvihXG8qDC3XKFsLv3KoepjFwhPVNsyTN5Ni33Yf6CDt3EJ9coms",
  "key23": "3A8QCLDsv2G35q97B2oHHjvzZqZ7C78w2mf86GEMMT6odX2wTkLeYp2yAtVm6gXLAJ5kv2MbHkXj2RxDBx5HWTjB",
  "key24": "3M7Yziug8pHynGkPh8jRu4PLivpanHx93dCkZmDSZqyvt3d6KFe3GCyaJmq5CxjwXPHXk1RmeXDiu8RGfBR2Zg76",
  "key25": "3Nd5261iMFa8HgvUNtS4zqn8YhHdgWuCu7wXgnpQnP1CXYm7JD5dmPxXQZ4WbwTE1dtZMuRoVgB4r1DVW2PVBSpn",
  "key26": "46XegUPfGMeZ9xNpFuawPSMM5tFVXskiu4bQcUJPdFNbFQywCVgjcmhZZHbe42vey34q6JY6owUqM8sTy7xiDwuj",
  "key27": "3FUj5cWJic6KAPwhb8tFmVptWMuw94RigWt1oAw6Sb4zxBKjiSCHrF6bDheoUREJ7nd46mFu292HdwhgfqXq8zju",
  "key28": "4WPXmGt5in7oMyxq6qaeThxLkpKyJJitXwyBZoHcwb3eezS5gCXQ2MNp2uECh5tTyWZwGhhjv1LebAESF8cixAWM",
  "key29": "4LjfZDhGFmGVkauomr7oMzVmuVqSXTL5RAKvSYHk4ZdM3KwpVRcHpDoBd5EHGUVgv9xPmUfwjEex7S2TANUXsfHv",
  "key30": "LLrD6wkQJuhot3JcsuJTeMg5hZSHFixy9SZ6aXn1uEs2hsSaRukLKjNBP17EKuyXRHitn88sTZs6d7ejF6sKHLX",
  "key31": "5HRSc4JwLr38vPS3vvcQ29bZ86VXeyF5d2oEbGCbbUgaQzfEuw2MjQ7omtRitVE7eFXRYbPcf43DX8uHjuqEuge4",
  "key32": "5EYqyGPSb61BQ8HYDbiLZmGFGh9T8da3hePEHUpwPvUs1HPFksUnNgCQfP3J8LWaqKxKMjbZCSVck2zvfZTTcEhC",
  "key33": "5MHcJwEQzbz4pczfib8dv9HbLWW4PWiqXgmUwfNMzoam2amUqnBgxCNLJYKT5tjPSnS8t5JhokWRwdC2CTuAMKc3"
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
