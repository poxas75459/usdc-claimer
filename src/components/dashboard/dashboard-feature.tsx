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
    "21VBtyThCooZauCaPd29se38YAyt8ktGeYE9ZZtzVYesnwrxotVv37cGAo5Htma34FnXYVMWMnYgyh5aPFAa9fpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UwFWZ7GLKxWWL7MMQ4D4iUNDshRKVpTD46XahQ34HbkVFNxDyfoHFoGRp4eCHhmfJriVkzFsEWTDLezD8GiMT3V",
  "key1": "62dCnsFEW2q8WhE7P1nNcaZ4tDefT1znsAGGrCi1vioiv92nJiN3Y6ryfEfnFbQR65XRvAZGeopwLR8aB99xyEt1",
  "key2": "36R2Xy4QcrUJ2KXAxWKv9tC4DcoKZqCd77r2RWyhbQihpYmLqFGysYkndPGGi155Va7fSwKhL3oLKAbxnymVRQTs",
  "key3": "hNvuDTRY7eURyDBihMLYB2jmPbXrThd6QZSL1T24VnqYGnHfVqwnXek5XrLrubp9JqnoJE5849XJwrB8sCcnYrd",
  "key4": "C7Fs5pLeFFCQdBkSJG9q5suJy3yMxspQznPzdk6wNKD6rvpaNSawepYoSPxJ7vzx89tH3MVJsmtiu56qaZfsYsr",
  "key5": "51z19iworx2eHr9Z7pZWLHe1xHhVvySgphCyaUPxrZQq46YebFQCvVk9iPHrQiHbtso5oZFYhYnTvnUGDne4iyKq",
  "key6": "8ivFVghZJXK7UoYfBoGeNjBKhUySarsM8VBar3RfXRZCmETxTV5JCgKoQwmMJBrvhugVBsJVXea1FkSCL4BxXHx",
  "key7": "4QrHXMRzdWscsjiWkwQB8arFjNM6Mb3jGVWfRzJrd4U6gwTd7LZZ4xuLDbDtj3b3UbhNQHXPu64ApMM5Q38wRMam",
  "key8": "hmzZxWEyjGNB1pK5CBRfGSurjwa9GBvucjHE9DWAtura7QTV8N1ZeAtxE24tZ6KNLqMTHQ6CCxWFnBRJdp23iUp",
  "key9": "328cXKE9gDhd66kFxmVwg3VdCpwNq6N5Zxwokz611akysL6PpDFPtNJaYAx3XjHuaoooDBfrwHb4GRYvr191ruQA",
  "key10": "5R3q1GzL6eM8nj5rH6CRGkm8XJkyec7SXcP4j81pozyPQJNXVAna5LGioJX8YX81GkZbHoAziDQHmqJjhG27jiRW",
  "key11": "4n6y2uBF91wTahb7EQh65UTujucWoHFSyeWNWamV6GxqLV3BYoAwz4cm9wYAP4WBmAV9xjBEijmPMrkSvojR7epp",
  "key12": "5QADpyedyG9dPLEpfKwUvU1ovm41AndnPf6FKUs5BFioU3cfiX97fbeah5QNzxsmtXmxdvRWgdUxSaXktLT8yFqQ",
  "key13": "3qEgJTZVgKT42PMSCV8aRq3cSouaF2FcfCWtjZsoM7Aj7wmxaTiZqzvD1Tnhp7ShAA9goqTGUsFEkT2SAdE2KzGU",
  "key14": "af1Bot9FB5eBNAR9Mj4GqZhwQK8U2fx3nw4XG99X6QGVBCUPdKJxC5uBio2hPvBEiGzUh2JeysrxtqK4TomkCEA",
  "key15": "2Z7vNpTZhqLVkvCKDxcC1Jxh8x9Hd2KCa8GkvZXTsR9rWzpPNDZkEzKbghmgDBW6anWLQHQvQLQw44ypQgexavti",
  "key16": "5kMEw2NmuWnURAouwH9svevJzSxeUJLPeWGsi7woAVL1Hom5Uvg2YLjo94Coorp7gt43A1bDD7pQyp4UYyZHuyar",
  "key17": "4uHaHerFf8GN9mibYWFCCf95A8jcVHgM9f7cpmDXMQ8kYDD5hxynaQkXSUeZZ1Efn64NjeDhq4qPHzjFzUugik3W",
  "key18": "54Z3GJq64k1zqFcy1yHcDYZH2992tUrLBD2oDXnSwzSAtVrSbY1XAj41Nhta5qx8Sn6SQG6WbTC69hehtFXgrxkK",
  "key19": "2vS6WYkfsBjJ9e5wv5Lo4M6DNaQcwZGvGEndtrRLTgm84GTx7JQPsWKFfqiyjRh95abdgYjrmABuPftCg6L7J263",
  "key20": "2URmeLFKqGcY9mHPXscZgNhJvnstGhmLfVjbYf8hb9gBNuL1dQJc7dhoZN3SBoXdM2zP7vn1frMUipUUf4K9Zu5j",
  "key21": "48YfzoqXKn9kKuBedML9aEVL7G42KvvkFd2MSdCwGNRwBCbyWfMgdts1L3eJqTsqYkoVtmDsXNKX31EyiWJoVLru",
  "key22": "1A68GsrSZ3EQGCfMP9HEAm5auoJCVhKznqGnKhX19WG7BddWbNKp5ESH1a6C8oDpJfDtQ9VA2i6ifPrA8dkAKtM",
  "key23": "tLHcQLiSYREkwNdGmm1C2ZgahSuXekBFuWaFThbDzJtwV4Y9XeSh5mXrSYMiy31K9ztsKvffneRcaGXZKRJ9R51",
  "key24": "rdSPNMY4HA7yaCkMTNyd7f3whi4rdqFT4yQxBs7hCnQ9QWSFC5nkEG5kn4jMjgnz6g9NhTjzZQvy97RCD664zd8",
  "key25": "3gk4P5AvnGBxVqPpQNUwVRCLNYA4XaYrWu6YDRuaSMUkdqSiDqk6w1UKaL6EvMiB7oALr4joSnBBARznthP7b14y",
  "key26": "3DE71kZdNNkmUqymcZFGZ8LLPiuZmLhebLCv37wEMjNeC3xLJGnf7Q8MBZaqJHWjddtKBZzU7emGex6Y74W2VTyj",
  "key27": "5QDsPcxkCLpovr2eLsA1gmQudMb72tnmVkxa4XBnjyez4Kx8QLM2dP2LzkbvFZmnv7JR1xP2UV2rCSUPxQTUq2JQ",
  "key28": "3LvKPATwW4BUCiibr5VX2NuXJGeLQzJD2zbwkEAxHQYLTydTpMhbRj7mXcbj3ufiaELQszaRmkqZRWqzF4wzVMh4"
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
