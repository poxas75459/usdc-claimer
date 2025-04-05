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
    "2yZx6BhkpUfeSCK3m94SjsnGrUDkzBLr3hLWASg52rrSPKm9n8ruAALCK3iNgkb6dfk8Vh2WekmsrFqLuKhmXkxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YmmcCCSgajPVs6Fa2CdyyztnL2WKcNXQUj2rVWEFyjKgF6ToSXyyBg47MsabmkqQCGD867DDyw8WhPU1nMY3LA2",
  "key1": "3S3CNzzsuwpjsoWa5DGCXej4vGxRKKnDo5HrBa7e5tdjfB24DQX5MshLKdsv2DUfs68EftK3FL5rtLxAVhj9ggeV",
  "key2": "2vyEnNm9peAuNPgBc4hnbL3KhmGjsKaoXHk3NSuGNoRg3WGPMiiMfu4YABUS7H6nuju15BCQTWAuhXAhPNoGWck7",
  "key3": "5QnxBKqBvWE2VBdDcU5xPPkhWwerNrsAAZvHV95UuCHgCo83c6DAio38LYtFF2wdh3rhL7tQE75kDYRXr14mKTbJ",
  "key4": "2nk3vdD4S695AtgbjQdJv4sJV7NiZ8gn8gdcCAVmqhc8TeABFKs56ucA3xYeBFZR2oGxTajJXqho9joYU51Cvqgz",
  "key5": "54iAreFN2Rspw1dh2TGze9qAocKLRSn66rPdajRiSeum8iQz9cM9M1Gatew2a76nsyoAKxGC3o6XZSwT5b99trzG",
  "key6": "3rbS9bogsZiGQbAQReH2SP1CqNgDaT69yQpG6thKTfHpkkm4kPn6oCoj5AbycUumPx2Qstbk13Qj9b3ZzSaTwyZu",
  "key7": "3TCf92A7MjPF4DNFmXZjcuwszZ7kpYnWR8tUZKJqKy5yZ7cScTGnGJVN7TUPndGefF4aK1J5hwdh1WNxVs4SWSVu",
  "key8": "24GrYtmD1YRpitcToLXhGnGE1v93cetE4Lsfo127Kbhme98GHHevQnySCm9UAWSCxyKBFdAMo5jWCNawubpv7eoi",
  "key9": "4DDpqCEdbSDCxbt5roXaJzp1xCHPqvfpNpWcQdDmyPkxgGZoaQ3TtbNG26aXDSrc7qtSkq6DjtSrJNchmZHezR13",
  "key10": "2icuojgM7UDsfdSTmoEsaZBZVXTDagrqoKLwVHQrJKtBhbmnhKkKVBh5qC9mnKHKhKAKDwJrJZ2diDyRYamEwcfU",
  "key11": "3yYCJHohmTagg9bfbEqKYNgFB7oBVRxP9WDguGVgKU7M8kMkXuk1Q49PRsofpApnqasjxd5mzmt2vBUBwadk24ek",
  "key12": "416ERqNZukXL6Jc46eUe6fN28HVncdpXeiYzofkQxGu6dTyW6JrZ2hZW5WDo6CwPAW3xERQa5BxSgRCpj9T2Fj4H",
  "key13": "3orLRmQcDerD6xrdagppBZkhWFvo2zHZad9ukW4hYUVzqBej1Gwstjn7hX3cRqdV6LPTSm5CdRVV6bthkbq4m9UX",
  "key14": "24FdFYzTCTsh83Z3A6gPEU8K26gDTPUHY6gcPzkpQkWqVioMN6ca8KAxcxco8QEYNdQyXbatdURUTgXVKBnMpXeV",
  "key15": "56uoAMhyuctjJvSj5BH45byoqaJs9Lq8Uvnhrv8wCT6xm5QeqoQmK92vtZUZ1gvLQMhTgudnFiEycLf27i1vsMWk",
  "key16": "4oCM7NfMHgunkt1iw7DLfsZ7GhxCW4Hq6BwRc7tLw9efQWD98hAuS6Hy6TNdKn5BCrN5fUChRsZmNn9AcKC9eMzq",
  "key17": "66qvVzv3uaEPVC6SFgkStKq4zpyzm152k2dYJtza5wcVBttRSquy6sVbLbyDtak1m5H168VN7PniNkUvsQ4njuxF",
  "key18": "3CvHvN7FHa2kD29FndX5TYnJBTHozp1h9MWkrQKuv8FMY3mmMuXE8GUUbfTSkRh7SAasoM5bY1XaUViYuh4LTDzs",
  "key19": "3x7s5MERePtQFv2EiQy9sZvbTaZQ7raZckouvrzRhAQ4akC82PDXVAK5gWLCEMhAUBEnNkpR3WhUb3SeayMVMj91",
  "key20": "3zoooaUJ3B9pGGCTZkK3Vwop9SneCicCP4fTt6ZpK2HyHxmEJ6wssewDxRcHhg8tAhnvx6xid5MHMpFRSsqWijUi",
  "key21": "4CSNwKysonortymKTdE83U2sTpqbUFxeD56zKzP6Q9Mb6bJug6niw4uVb17dMoeLzFPWiw9e7JNfGdwf9yvnZmbE",
  "key22": "3xHJtZoS8H3EU7VPYFe87E4RiG1mMCeug7RNsVs6JuvYehwR6XaZUDHrjL54EuM1QhoLfJJhXvJdM2iTcQf1RaVf",
  "key23": "48kLfA8w2UeR2zuVQFr5NrJbEMSk1wj8bWmYWy5f14eGvqpAbCLG4hUChNM8ZvvoBBTDWwbMX1BvRyc3M9zrACgc",
  "key24": "5h33MG6am4wnkBTsj83cQcQroMUCJgtqSHSKe6tu7rukKDCFyVGXYdqrgtBrLRbyu27S9956idcj5rsEgJQfgggh",
  "key25": "bw8AXFjdjvqJZCUhqvi6ti3PRfcdFJPtj9ViNKPCfiHGtwkpZMXLdoyxT2e4r6zSF2ttLt3oFpBUpeNy8jnx4Az",
  "key26": "2xLobwndArBGb34LfkQrzxSGkLyMRkyVxW3yVVjxLpcGJVcQgEaDbbUjn1JhZvjrNWu9iW3CeioogS4VxbGJvaY1",
  "key27": "3xSHqQyxsPvLgZfUomNcnf4YQ5f3L3L9ovoNb6jCgpr5P6DpW4oyTwHfYnRH8URDzTKZXkAbzNqAa5vWA2w83tLm"
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
