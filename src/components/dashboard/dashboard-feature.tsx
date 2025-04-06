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
    "3BrF7qSeCqu6rPVFiXmQk7nN7C4NJrc62NeUHmST81mATSEHgYYxj89sy2XcnC3j3tFo9Xb6unciJHq7twBtusHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YENhg6K8gbxmqGhYuiL3k2rAMHm7CDpSHv7CesfxsnttzyBopsjr7qidwAgkfiueD8tFrRzoR9GkPbaZZ5R7K5k",
  "key1": "2yNhsDbQpoAYviemkDkRyt2BVPUwBrmCdpH6K6iAAU4JWWrWGu4aCev88MQ7aRcZSVv57bWvJX9brJzU2gmpbYB5",
  "key2": "28VV3mcBupwqD8zcRu5d7Y5VufKUxnv6dAmM9xp2iDcivfsHVZtjBsj3EXbmexiEbhqk9u3iJtJXKG9bKtkPFeMY",
  "key3": "2VYhkpmWk6tc5kv6JdDQB6VLWAfo5uVSEUMTqYv9dxnaaqDd7SpUjrzTd5ys8YkFGokMuRkrR2nGdwkYEB5nXEve",
  "key4": "2Ti4APdhsFbiZdnz8wg9Nfcb5xSs39wAGfQJUu9AH8Nb6H1C6VjD2WbhWEWokx4ZZ5uRjsojv3ftGFzXvFBRXUwy",
  "key5": "612WGvKRYNCGxmLWRW2ozHiBzMgTXxs737EYyzE4ySv7WMDePhYV7VG99XD9wW4tftMsJVWGHRA8YGZnTLGoo7Aq",
  "key6": "2365zi6yXZ3Lo82cGCPrE2mjME45HdA4SZkkjQ8C7kMd94cmheLyTej7s458ui7oL92PE76nKEWcjYgAoREezE9b",
  "key7": "5WWyRyQtbrFdFSqn7v4tiz7aMSWPXJf7rJsNZiph38yut4faG3eZrqmXLxzSsW9pNEiSYCQrNjwTvcEPyaiCG7gD",
  "key8": "BfWwjU2eNdRiPJs4L3jrbhpur8U9rY4MNzjzzqGypNiANAxkyZGTtnxJU2x6tyJ9NpaLXargmJie9kdmKFpXULy",
  "key9": "3VpCax4fAQ2QWGsnjXVvh7mPZSmU2SuL8qak8pxXvdonzpw5yL7npg8bH9sDbspEtbqvMdBzKgHKuoWmmdfjmi5x",
  "key10": "5khUeoQeaLLyZm5XcGLUVnCSdFgb3hvkaB9Na4j3M5nvr6MGGFbsW5KTt3TFvWKjWv2HpgDJt3fbAYsNXTjkBsCp",
  "key11": "4yJQT7jd7NmzmFjK9FD2wRF9bLZ3Zy5U5qn7Fm4TsKRAazmPP9bmCEPL7KshhmYfJjdNkGXH4ccJrZ557ASoDDy1",
  "key12": "3f9N2MGoZBZYnsNpC2YgQ9QjARDscVZzBPTNrtE3K3UqMoURaocbFrQCQYKgUAL2cr3bCaWNVDYdUCWpvzE78EY2",
  "key13": "3D9Ctsp2Us2tMKDdkeJkYRuPMtEHnFnJZUcsgQewomPtakqkorpkGKq6TWCCH3UGjqtj4rubGNwLj8meWEyUsF3o",
  "key14": "2ueL5vAdNKJbWwRUC6F6pm2TtQkVjy9DemKeqN8fADk81kBSiS48gN3kD9qNdbSaGPogPC7qKpDSYWNUCJPoiZah",
  "key15": "3wCNDmyR3LEYZrLw452h88PkwZmjpEwtop5P4CBvKYLbMKaUZeMoMbDTvBxCmvt7q1iKKWB5rFBu8A8rHq3r6wtg",
  "key16": "43rkAvx9zT7TwE3vaBDGKcS47eiUDLw7MgEWc3uQrW5No5G82XXNJ6a7zJCqF8DHTiqaizqnypWLET1D4ugkgTNd",
  "key17": "4mzhXJJxrBFhacAJxn8KBjSSEKMccMqmtctabvxCSMbhNNbmD6cKpQT1GYVBU6niATea8bDg3WLorTT4VJnCaKQH",
  "key18": "4qYr4t4VfVSeyn19Bf1wW4kFYh5V4f24EGkPrHfvjHHT5E6VeBQZcp1doqvYjLa3Do2epbjzF1JAYLvjKe6r3mLb",
  "key19": "26Y6oKufV737MPoeMjALiDctDw3MTcqNKTud61pSU5UduQosmtkjGzp6vgVfD54C8mXaHTF6yqwQbqfy1nXo6MTs",
  "key20": "2fdH8gAhZPhvUxyiHmB7iWEPL2ft8wBBJM499cJrSDFvWwN2ZovMMavNhVsMfEu43qNSeE85DuAKi7xDYrQcMRYZ",
  "key21": "3qn2hNu7BN1fkqZdCtQjbLPp5F37bcRjcfMZiHtEA3fZenUTYcW5wLXgY4rQ3FwwWv1QSqfWAzCVgnZ7iLt7phW5",
  "key22": "4pSyBy4fKmoq33HxqrTysdqpj9c44r5MgPvHMCpTkvBKJB5FeqRwy8vaY6vSAN9tLqqCJByCdvGKKcfkjvEekRpi",
  "key23": "3NwSjpm2h2sujyGZZbZL9CTbLrsygwCWkbsoMhUS7BzuzuX7VKcVpLQdHQpdKZpBS5mvo23Pp1SzQ12zXb82BzGE",
  "key24": "5fDZZHBrXUk2uLD65UHHdXVsBnpe3ibViJSxYBKZqyCS8ZT1KxKMmyW776CNAkDNJtmeAnFt1wWFyzLN2KBEztq9",
  "key25": "4cKB3F2PvjxUQmftNokffUN3i7jm4VBFEMz9svrXtFAcZuax1XWZ6EjVaVEQNW4FUJVjL51rM4M8GcHjgybFvPNH",
  "key26": "48Ew8ixg9XjiChvHsvHDK74nEZLfEuBQQx6brx7Wv6ywxoj6onLwmKdgQo4KuqtNhiHmExMPrE1qRBMSxKof3Vyf",
  "key27": "3yuK3BTZeDzCi2bVBNyRVqNtKq85mygttGwYkMNxw5dkFdVUFijsXVL9Z5A44u4zq1811SR6iiKowoS1oxHwgVAW",
  "key28": "Ammys6KzTC48MmASup7qJVQQdAePRqK2BLFLeosEUqZ8hJsZ7eMcFmZE84Pm4LePY3NbchuxszWQ8eARbV1x8NW",
  "key29": "gETKgoCn63hhhm2A8XzMbX86G4L1Bg3GoweA5NCCMaTf7fFAzVwKKcWYgqt36AA2etQTngELREJEAXzShaoqPuW",
  "key30": "4MuNm1tVAVRRJTEj9nrdYqNtRDxfS4KCCEGiz9TFN6bvukJQd5QX7bPqeBiqzMkgQofjxKEofPZ7AVhDLCJmvGBr",
  "key31": "buZCfzkqXYTg1BBaM55QK1ht1PbTpjPYQanCuTuXxfRe5caUa5B4KtijXUyAj2aTtAibxj7d1sg8WGBKFnyeaY6"
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
