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
    "aDXCaa3L9RF3xa1sqdxQrX5XFTeYxzc7ADGBRkNA3CAkkdRFTeHxS1kxVMMkV2jc8oZMQT1B34qteLu4BkCAnzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TfJzGmmyLASyDDKV4tXLDarzNVAWWDC1U7f4Ghdp78FBcf6V7SSBrYxCF2iWACWtjGnxcC1ipbf2XSDAXa7kTi6",
  "key1": "4piA3n7qniQPYVCcXoHMdz3vco5GUBmbM9K9S4PApEphNyps9orvoTUiQ6SyYtobLzDy5TBw6G5dFi6kC3Xc271E",
  "key2": "5c5nRQ3AbHdPrTPxZ5Nc4sruDZ2mH16nCSWpPLJNmbbSCqYVj16mNi7sp1Muq7VhhssSLu2esQbNqejSENWPHzXA",
  "key3": "53idwQetXpuq8zdogBcBAqjM9JcrnzMDkdLk5qtivQuCLxchSQHuzHqbMK2CjyqqVKWor4hshxuTAhazvxa6Zpi4",
  "key4": "5XKAvrfvz1M1YitQhhL5bsuw83UCz9XCn218oZMzC1XYCs9bhRATXNPN17GNUzeAjpuTfF1eSmwoXNKWEZGRFGwQ",
  "key5": "2vBpXTdUfrZSY9HyspJMxAGZNvcGbCoCPH6giXXubvJAanrvHAZBsQ7Wrk3L3bQELBbaUMxPvGQnfyU3WDLZYi3m",
  "key6": "3dVeTQVwAr7a3S4Bw8NrBfc8QkbTX2wevVwM9AhDt9Ym81crLBSKhVQkNxb6o5ALm31Kxr63zQJU66HcNco4QhR1",
  "key7": "5GnDVPLxuravA4bMRpJMyr24fzAjmZN45LqAxvqgqZL4GF99M1g9gMDZ13XiVtGwvK1Ca16J46PPX45Q3zFTBpgU",
  "key8": "2CxBSSCrZu3hL34qG8chtjAUJtVQzYUDhjX4g5kF6e2gMyQLFe8zm2epGCxxNwde2YAVTS2rFT3RPCcr5cE1Hxj1",
  "key9": "2BZdWVELrYoceStEBmnRTzAdLGNmTgd5MeLid13A4cK6VyB4NVgHV4jSLhjSRWMaBy2mMCCDJZ9gCoR4x7jw2JpW",
  "key10": "2igaLNFy1LoQroGJxprxexUsKpXCeDcEajrahChYWggaeode1aUoDdCq7VTb7LeHS2L1MEKhACwuHBihxzQvQeHF",
  "key11": "4g7vTXzDowoAQf9wiDt4JPvHZvVg3p7n4b1SXNDwGyRRhf3YANNoMd6fB8wGhWJRRpFHavRN1kD6ywY4ySHhofJo",
  "key12": "2K5W6jwf9Ag9sU4jTj1UoETeA8TvMmkwPAKkBAiY9rvvCqThDFXsCFhZfRQmzd9kgLGeHtCxasCiojbLkZaRnGCd",
  "key13": "4zz3dYQttundBEV7913SHtbrcZvD95q5oirpSeQ2wrpgfuzAK8n6Pv52AHu5K1S3WuEXSNh5m7JK518HGAT6rbag",
  "key14": "59JACQ57tDU7K1oH8SPL8HGGNAXLrpYdaNfUTLsq3FMGuH4A5QL6WSiXDTEqtynMa1e85tAxeVRM5XFd1XHJXDMD",
  "key15": "2eiCwTgiSWcPJx9xoBvc1fWrVBAo4GFRkz2BT1bkEh3ChcofRYC2YpPdsV8Zgqs2JghHAFgVZq5QyWhBYauVit6H",
  "key16": "ddeD5kLeSmjoDMnT8vFqcT13Jyd5ztgrPRxawnVsLYgXKu2brK2LyBQMAQ4wkm8hM9RBfrcUetuBVVUDVWJkGGi",
  "key17": "328Wi6DCbVKghSinxQgNjWTbtMo7nnPeWPEnSUQTbU1G5EKwpieuyCzffhNRGowga9z63b3TCQRzfsgKoCFzhiAA",
  "key18": "2c3oVGiHAix81vWpZUQiWHroUogxHXtGwnWyqS6ueVLjJemY2mzKBtBU8VN8V3CygUY1jWE8WBtbswkfMtAHX69h",
  "key19": "3fFFofS4WJaWxdRDGwbPsDosZ9WptMfHSrtyEsM6iB5nb4W9mKecs2p7ma8hxEVmp45CeGSdzxeHqZbNtXZqbA3d",
  "key20": "4e7hwbM3qhNkbcKWwuX73tZUdNRJTj7zut2C6CJWFzEGm4SzsobVayxDqfp4hmQUKvxrkRodwthBW2ZgJFHSi4XH",
  "key21": "3sCz1hPCyZwkotQDGKLtEiF5yrcKrBaXXUexuck9KQq7Ft78xavcVWZiRMh3YyLKEgYJLRztubMNFKZ5HPXfaM9K",
  "key22": "5mcVNBg4LQG8Pvd2KQTcGRGiBRsJrqjPjvZjSTxXLeDfwQuVPyrDMuNGZYKx2q2jQtcdCGQFZvjuVkjDNVtioFy8",
  "key23": "uns26EtNvaDebvdnd9tUwdLmbuEHFKCVEhQvJazbhX2jCpNjJg85LLBYkH2FAhB6ZSsM1Ay7iPLDcPruG78mKqp",
  "key24": "55rFJtxQ9gMhwG2qPB9DNZkUDQ2p4zmE1sg9qP2CUSfg7pE9XN3ccnJawNUjhsccLk18sRKX8dx3vE2WZVSMJdNP",
  "key25": "3J2f4t2qr3xsw9FLCLzyBTf2HxVUWNexVbXVRsNE79N4YotbqtJvuevF1HwQbA57fP1Qem8x5g7iKmzNnb46vXnd"
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
