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
    "Dx9AwNMWi1DpGTGYRErRXW7peCKJz8pjkS5RpDWRcUPga2V8CezRjDVe43mAcU3wPriA1GA4TE1MTMDUZRZiL8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36f2rzigGLqp9jAUYL6ENS8Vi5YfSDKBwP3NCANBmYBDwwYsj6KfeSE1jM3re5Z7gDfyS1tNgfFjrGN64zvfP28J",
  "key1": "XWNL1neEyCQqGrvKw5Z75v13Fc71y3Je1jjx7M18P3ZHiCzUfEkAxmy9HzvMBcJ82Vo9uaM4MASgYR8Ur9Bn5Bp",
  "key2": "WQb7tQsEcEZw7GeVgBZmsDa278J5ZbFCjRJ6YhHvmJGirHMHQbGruLvVwLx17Y4D1DSehW6hrKWwRaob6Edc3vm",
  "key3": "4XVnNwtHsPrzagXqsxJGPfYiWUkPREXXYLJ11GmubjHo3Ei5uiGekbvBQmfMJXZSaYVWdc6VWbj7aaGCaki8PNYr",
  "key4": "4t2nBQwwTJSBMS19ziEmUsEVcyXqYsgt64WmYKaAo72RHmi6aFbj6qF5MasA2b7UKFiaAXfcBtAy4ZebdB3yhk3B",
  "key5": "5VR2heUcEWjXfUcvNvSewtiYTSAKKrvnrUAkpGfveNj5bFuEPPdsRvrv9jS5ZDugeJsLytgsVK9GpN4Y7LKgk97L",
  "key6": "41y5xNrYEtUuB4H28bFGf7fFqTeV9CaLwnUgU1NJrTMDXsrE4xoHP1XBuSt7ujREJCArzzdgPC3KoQmvw5GeXJZW",
  "key7": "TkopTtag7wFLGVpdxHAMM7vbXPXSmSBHXQPXpvveefvu5E4gNToXBrFyhngJRcn6kuThdrWp3qVkVWZ6JpgGC6u",
  "key8": "5VK41Af8tjhMuEqzxhbStNisRhtL9p9Wheajvfx8ZD5L4dFXPBBuAMmdKvXWbshKF6PMWLxd6y2ef35vFUusza3Z",
  "key9": "4T8gUdakQ5rbrkumy6m98nLycbUCB55jPyE246DRLPuEg69SkamKAnyRhEQPTEM23koUJME9kLfNPhorYFKD2UT2",
  "key10": "5KjTa5BQ1ThV68GAjFGAGBtTmorvenByQCeS27KsGYmJodztPXm5GdjUcLPcEcXWDs35tkw1X7ZGc7JY3QgXUuhi",
  "key11": "4ffjS5FBbLixvp8KPSwkDGRkkAZotbTek5brsxv3TL7WAMZueo3fyuk3hTXtnMsybKwjJLh83CZEm2c7JtQoZQyU",
  "key12": "5rmq56KnVBj3EuxhLXvQ44wimRK8cwEFiqySqP9M871L9zLCbJs3RY2HsHEUx93ZrmRVkpVmTcrSMsyMakEhEaDc",
  "key13": "2tkmQu4sdU8FeRCHfPL3Lk5p7MNKWssrZVrGNxof95ZJpsv6MK8qexoRiNPDpod1ddj6EVgUUKayd97o4cEoRQgP",
  "key14": "3JVwKi1X6B1VnKD69ANhPD4EoAqPZ7jjgr6EjQzPNAkkdTQqZ9pVKwjPR32HxSsUSwuUe6afyeFBQ988KfSoCBEc",
  "key15": "8NwCA8EysRiKoW87KVCTXZoDyG6y2Z2Xesxy5wqEpa14BQgDzGDLWkJpxiBzoku4b6RfctQKbVFrhpBGqLq2H9m",
  "key16": "SHY7cx9LpxHbib8dTFa7FPD7vpu2mSnbCPnw9Ya5xcAKey4ew278pcmQ19VBQoyKrpkdnbpkCrtHEYoCutXK142",
  "key17": "4ma7rwrpD1YEcx5rjV3v3g32jWnn9woeoqBFmBgiPx2EdubDjhp7iAcwfSyoA7zGVv1dAxtLuuy8qjY16QExyfbi",
  "key18": "H5Tn5rboTUzWvBJMi3CAGRm2vQ1f9qXktWcYEeMz4ZTK7fGTQJ4CpXSrUPCWJFjZoHM5j2Mq3uN7ApLBDMRPZdA",
  "key19": "23SoZdkA4GXx8dbtvgNpaAD5ZK475XSACd3xavgdptEJuaptzCg157Y6LHxMuKSW4uPpwR2Scc4J3h7yDvmFWnoU",
  "key20": "5RvgFHbXEmChFdpE1KXaZtXsNemggd9o9YdSTkkaUcA2hpPVGz5miBHBTnLy62zBXNYBddpByP5nzuRFtqptJqUg",
  "key21": "5amXNfkKFE3XSzABGfHbEZENghLe55rMgirPV1sm9GUCTdMddFtGGK8v6yvgbBbkwAyfhGTi9eFwQrPqDVU7NcNP",
  "key22": "2FZhDrLzYW2ec9htK3ocRSFQR42uvbAUYLKYFpKu2hpP3mWavXouaciFiyvMHFUJzVkgChHwbzvD7zhTX3yqQpHC",
  "key23": "4pNewiaxsK8R6SX2ejYWj2b6Pd1Ze2bWTo7vbHtexXnTzJVD8NFPkEwoPdSTgpuD2D6zrJcruE9xTXKPWaiZgDHP",
  "key24": "2wWoV7EH7ddQTzxX8RbQw38QxQwxx3QBmRTqzE69NFya7qSmEse3pEjFRahMQx2seoZ9yJ8f35fjcUyJo2m23oYL",
  "key25": "4DLUeTz8A8PC2wtDjVztb76gbyWnPpP6H2hfRttokuCoSvj8dXmiRV4xBCTAwWGB2wCEaEjemsKQNns6sTms9aNA",
  "key26": "3peH4ya1cUv3vs9jXLSm3LRbE1TnPMu2y44ZtfhkHCdAejgKXnqgNTz8Wn4ZW6FR4XfMuQTtdegZwxh949kcxUcY",
  "key27": "2Z7sdyt9eKsvCgYCaPqEmJXieouRKJDYCNXnWiUHUD11WnFYAoeE4WbZe8FD3DUHesh2LiaR7dmi4scE3UU5kH6d",
  "key28": "4UE2kfwcW1BZ1KsxeGUNB9jTAtJ9dzvtc8hwMa95KLcGvE7x9rga42EzhHDYfhHFuAXXTPAmig7rvGFkwranvGmg",
  "key29": "KQ3NEo9w2UgrfQLWukZLKCDCY4ZK5ghsJy9hrxdpeWunyvYsusucmt6uUri8HTDqJtE7bhKC53qp64VpmXkqNT8",
  "key30": "23eVS8MceMaP33jpdKL19WrDQD3bhJpmz3NNguTMdYjWoV1VLju6RsPwiXJZJ9Y1LJSdYbptMWyAZ5fULHTacwUS",
  "key31": "1xRujrH2kGFmSyvwzYbUJzV9wsmJii4aVyLBcR8UH8RzWC1qFvWE468zhgZxpMWKKpfETKHLeQaDequw1zFp3Dz",
  "key32": "44LZbxtFYq23BLSy5cGf5f4Hnk5YyoSZ6b9dynBgeBi7kp8twPDN138LMQr978dTwjakd2QGg3wufgf5KgKWRFeX",
  "key33": "4TVGrVpZs6VMBVhyXBNjbCAHQPGS46T7UDEcp7GeNCHTpLVp2q5vYL7yz3YhA8k5jnNoJPnW3XhZKLTPh84yaiZi",
  "key34": "2Tq6cfwECH6LcuCynX1fUSHgn4fiiJTKuauxmK6ZnbifMwNeZVzgecNyjaemjiM9rV1ivDU8R4xCDvyb4HEfXaCm",
  "key35": "4qSChnRJRdEqKCEALjAGqiKJ62Hp1xTvVthf85sEjArKqCXPPMQPBQmEyoE6uhNsWYPnAwJk6CociqGVEc7Jgj3R",
  "key36": "53YKniVieYFrC2aAXwB7ceH7wvuJVSpPqgCnykBQtFYhkipqa7x32D9EB3QAizbhidWtjRt6Ya1jHYJuLDRpMFMX",
  "key37": "5cnV1yNZy2sLuigks71kQmWb6cmgrS9HoiUvK7XgyQGXtsXodtkZxbdzQ6gXdHEuExZnWTWLda7KgvVtArxQSzYM",
  "key38": "RQuPqH72nPnemjY9oU8jarj3uu2N9Rh6EPiWW2hVNCHSjKv1yiZaBo8jYPPu3idgB9ekiXwveSM4Bgt5ryqhxf2",
  "key39": "5Di2mVMYqnhv3K4Rg7wHLF9PQ847DPmrt4zztrvubiJbjQtqvfbzQtANjeXerr5rTgGoK7WPHvj7tP6ZJs6Yw52q",
  "key40": "4VP17QeYk8tqHWEMPsrXeuMfNjXwXjENoKuNMP7VKZssqBfd3iAwMZJLj9k8ff3jyjuCxmPnGzbvXEW6oTRxyJbq"
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
