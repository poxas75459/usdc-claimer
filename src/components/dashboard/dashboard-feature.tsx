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
    "2BHYTeKmFFJbugTMiz4A2jdMqLvP2Tznn3EXe3RAQjZU8gXgTwvWtVmAAZcW4zKgagoiTFwgJnGyDyoRaYL1SL7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JECyYLShsDZ6tY7hj99EiuR6rTXufFwVGANxRNhFh7Nn2sBcgnnZcYVXXq1EM67ndtntHUk4D1WX3HAQJ4Rn2bZ",
  "key1": "kEVFvzhV8WeVVGHYZWCwRTYFi9KtibiKnahv31B6MRf4Fp5NypGELnvsk5K1FzZuA4NwrZP78FSW1eS67bZC8hh",
  "key2": "61Md3pJxjAfNsovNZAKpQqRmXHvms3mUU3dwxPndbSMyRZpDQHmejTbuFYzKnFgEPYNQTWrrosJG1fB3uDbWEowM",
  "key3": "DubVo3BPqWXFqY7RxvomXmDUUbvDCGT3FuLJDp5MGobLC4mhPn84noQQo1VA3dxe3koUp138mhMzbW6eQmLhVbN",
  "key4": "3gmvfLLboktH8icyL5tZbNaT2Xdqyu28uT1LrZCjqiQSsRZJjjcrevLiQ5MuekK34BVE1LBWw356KUC2Q9FX1Y1j",
  "key5": "67Wn9oPzFw8FGH3YAbzkANq9BFkiXnJAH4cw4p8DZTwst122EoLJwTthnsxbznumfnByPzysc2TFZhdUJ145QtUB",
  "key6": "2qTFVc365dvFAeupq2PevdMUbBVh5VFmuKeyuZD5J65eqm7F3myFHTVV8hrZCRUeDsieRvYHGZ3TcUPsYhND6Ts",
  "key7": "3dHAPBrsgTnWCcLg3KG3Yh8LHZnxZmS39M9TGurK8tV32TPgyDDi9zV7StsY2KfmY8iyptXQLuvnxLPXVjjNXmWo",
  "key8": "21NRuGubbzF16UGy5ggzivpuKPuysTyW9vnAuYbsAwEJUSs541G3Mc5GRAF4iRESym6LMmyQYcznMXPZRcjEP5bR",
  "key9": "2gqxiA3KKiDGq4GfoZiCk9786stMVikLyDrS56wruz2sbr6GsBnwtMM9RnW4jYkAVDUTd8P93dnuqmkhZcB6rbT",
  "key10": "5uswGmwBdqxRaztjZKTQyWcHq79b36iVr4MURZ7exJMFow6ZYRFRYJLa56aterJuXFUqQAdZ737gnk9FcYMhhuqN",
  "key11": "34m9Rn1vMdY1ergxPHecdRvFU12vTGqagnRhxgJDBMV44bhABNE6JH5Hz2DfpLUStQ8QuGZ276ZTKJ3AFGq3qK63",
  "key12": "5GcqR3XXRm6oE2fZ8WDcyd1bv2j7fsCutmSkXiwNZjituX398DVmwhEJNPFrPYZAnbxws5Y3kXSYA1eMrpLHKNpb",
  "key13": "3RESiBNvQPqJCdTSovHNvo9RuQoNF1EZ1H5KSLo3Pn2GguoQF5G5fnDckxvWvP14CFkoE4njkeNStcHqCaHMkRhm",
  "key14": "4q9j1y9p7g9kJUHX2tNCrAKVauZHenSScbFAbRnxcdCPXPSSF9wSAKbCBkQ2G1LCs19MnuaRJ69KoD1ucjbteLYS",
  "key15": "36iTSNpfFvLWdknLrLoQ3Nv1vdB39Z2B5SrpzfCCDecZsTdKqfxa2zvTFyzq4XZHyLhqLJ2frHYECxsBG31vCYS6",
  "key16": "3uBXPkPub7z25ES68YQgPZFmKkBStmisif5gqB7yDrqvpySvxn2yReiDLqQYBjhYEcPyAZr4hTpLy3nkvTBts1jS",
  "key17": "3NRJZGr1RZYszKtCRHcaZctgXqBdEy1tYZPmfkzyC5nzDx2wWGdJPWaJy6x4bhcSBEwVeTBoMW5pnRjpaVi2U8dr",
  "key18": "5JQQp42nrBMGr4Yce2rV4YiAD7Remo7jaLkWLyES7V77V3h2yMtbRjXFNSwvbkbdQdmFHQ3XLhLiuUjxev73V72t",
  "key19": "49oQFKNq3TEsp8KSWVM8WeV8wePSZu9XLoV7ua19XU4JSMSXeBxUvvLw8hwCUJthSeyDHEZqLiWzekNNb9pEp58",
  "key20": "GAGT4JUYv968yyyYKPiytAK8gJ55fDdw4dbbMCwUjeATfan2NdT8HDUEuPvt1xU3cYoQ94cN2f6oNpNUMzU9t5j",
  "key21": "4enrNK3CRirGM8dLxQxw8hxcx8SBbzb2saRbZotif5Y3qmqhvdDTHqR8UL8ieBTHjyVoZGV4pPgyY7eXAz7tbVyU",
  "key22": "5W3QAmYRETz9tWZ3DtNX21LCagKMCchEr6uDfFHrwvvM5ZGgFeSyLbAseLVGeiGuyJy7XRuqcTC2MfKQDrRuA8kC",
  "key23": "5x9ZKZaGnPMhVUAyyXqa7cWL3Psv2UZPBfuWLsmPrQTiHwDghWMZqU32dJH2fih7rzy7B1nuZLiMceQupWMEPjFM",
  "key24": "5anRQ7BZoqyxH6jPZgzrphLz8WAQZiXTYSG9VwUMoNXWBNEtsYV47iKtxNQA51hJz6B2NeJ21Hvz1VBGTSETZvaC",
  "key25": "3W91MfcSwRA8Ms9L7EdzJ7U6yRkPrAgZ2JDMPNfzwvsraSoAPWrpzQyxEMVRoyxk3FbKMsPshHRiMLdTSfZ7EKLx"
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
