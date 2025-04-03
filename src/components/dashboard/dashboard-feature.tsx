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
    "392JKtFVNXh75QSMJKb39Achun6HvXqeXDs4sm76eq8eF33SCvYkRfx1U93UYqqmpcw46HU3zB4ek2zf6sqnV8SB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s8na1r6fZVR9mKiekAL9ox5wF1fg7b5y8GQiueL24q45NwvXpEvD6GEY9szfMUvdQFefrR7qMFazfFeRqSGy4vk",
  "key1": "5n11iEzqhYJ7S8vVqCVsEqttJotUVK7Zzm2m6wgS2bo61C2CnU4kPnrPPFXZuPZU92fe8VviMyw5yhRc7tCwWGsi",
  "key2": "FspS3Tirn8HsXMwqJtn1remLCaqEsNUeTzFabA1u8m5JLEKHUGS5dHL2u8EiYxQmbtq7L6kq1hbV1xuWBejCt6b",
  "key3": "2f3SaJEQoDgGsZ8pxZwNLJqMXhSpaAjrBPXx95Ac4PyPaCATEfcZkWvYcnVs2dEkDqB2PiZpWwbCocpxqQJznPiq",
  "key4": "5g75WpeqsBHoi2TYFDiR7umFW85tAE528JyqAhp5ja6Epvd4TRNe4MkpfCVafPy7dmnYm2a1j9BC3LZWxTnwjw6q",
  "key5": "5y31gKyYZGrnTrFzsW6uvYyR2BRfz8bkeXDBDanVxdLNw32swf9Xf9UyBPuUyKGYe6zp3UbVkFiEpD7yZQ9BcSjh",
  "key6": "3Lut31YLmacrsuxkeXJw5EArALzBN7nMyRcn5mzaDJvoieYMT4diVqjEweUNRL6DN423JKMGY2wnZeZwSDHupPHf",
  "key7": "4qpXX32hRwhTosJzgLpzLZKkPj7wHViriATCVKwAuhMHhK5T72iY57yNxd3AWGD7XmMmScTXQfNTBJR7ezkQJmxL",
  "key8": "2sa81PVV6krqwecqDE2YL6B3MPvcbfMxCEYcUV5kZBdwHoMchLXbmvLWMbZY2TYrGJiFgZzCoMVPtDSJmHDJP5gu",
  "key9": "3dLTdbKJmJzzb4RqobFPcx3bSJVPKaGSG596hGiXp2RrrW9jgyy37HY9FX9Xb4aGh1NCv51L4xT5Sv8eXws3EnCY",
  "key10": "THpbfUYQGiFrrRh9MSy5javL1p7a9W5rKj4hg3hj16KDsDN2A69uWh1DSxJJrNyCeHYpTHgUST27ski4aTuxQZR",
  "key11": "5tayby4TTzgs4mFQphJ1B5EfMvv74KgLdaHhDrFDBUnLRiZKjzy7rkRScEk791D1Jmmv49NMRQJc9Mkx9dx1GUXs",
  "key12": "5p22weLMn5LKwYirWrtjoDuUYSCMXsxrYhs5sbX45NdkvJbVyBmoLCrN3bCzYbxpgynQspHTQZfbZRjDD72mcfTT",
  "key13": "3pw4C7HxDyEtBHFmzfEGaA83EHnE4Xx8U4oVCMEy8EoKQLENjhN5sPadcfThTET2RRwmNrwMMYxojqiREeN7gTwc",
  "key14": "2yAsenPtVPDmQ62xEcVBuU3FxJ7kGUTyzQaCLQoRCQ2ojDN872pAL9z9ENFpqASCR39v8WS95eZJrP4Eo3fo78QU",
  "key15": "2keiHQkzZfgj4suqpf21DuhRkFBVTvuv7os7Rf7LkfV97WkuCSJcyuDZZJYSrwqSqKNFXaPSc6rw5syUqpKERVGW",
  "key16": "iR4BZ1B7nCUn4eVThq4bGDdW1VWbWKtDwt5SK4rN3p117YG86Zx46Jes9LfmL5rP7HQNYKYNWZmaNXdoHE293V9",
  "key17": "3nn58rYvBN8DdEKudLyS14FBRVvvoLh8h4LDgTPxB8PjGG3rg2dfaeeB7HtQBji4gGKbuLzF8CoYoKQ9aJgWyJ66",
  "key18": "2eK7ZUR8wpcqUfgyx87bcqiAaiqgR59hNE2wzK2cqcwm1LqjQuvcrfkfQakc8HMGeyWYwQygA2jeYkqUxzatikQV",
  "key19": "2Cn36dW6RtbjzP14uwGEZKjwC5XE6JcU5mzxiRLtGyHiLsf86FaF2tvUa98aqRfv6XuZiRqdh6vcxj7JdQfLHxMy",
  "key20": "8xCtYZuGkLoxZg6b15ANZhzPQ1VngViBDo2oQ6WdXk4BiAcEpLJcCZD484XYr5SmgU4qAfmCydtdKcqjX4dun2r",
  "key21": "4Ytvc9WhWqPADN3nCPXCXd7DES48cUvoQkjWc6idNWGGuLw4jT1Mh392jm8nwPjqJVojoaUwck4o33NmPkqGy7VC",
  "key22": "4wzzWd7XDqg1Dq5Aa153cyg39dh1xqpAJSqoqsHVHEzDL6eEN6BaHZJW2BPok98MAR2uaAo7YMuL5fkp1G9Wxtp5",
  "key23": "63VYvJhgSJy5gL3ceXe4tFTrTpv3Kd5wjqxxJU4cwi6SBYT4hGGq3UVMM2ex9Ja3U7zyULzyr7Qh4bh3uAftoGEa",
  "key24": "46AhTChfVHrFZMAASmVxtVaEoXpTc3VFLNRv33RNbxz5A4HtBmHFU1Tjmp9gH1DVomC6az5S6KDq1WYMvpdEzAkR",
  "key25": "kGeU8MwTn3v9kG8F5F7GYzQTEEBwN5htAdT2AEwcisk8KhbbAM5u6JdBKHVSU4xCtEut1LatyHDGMEKU6KZLLuG"
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
