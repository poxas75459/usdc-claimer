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
    "52HY62vCXFkfyXp4ArX375schLxDdyad8zTzbrKtBA4gNosTmbrTKkJVibKDJK2VGWUPTxpckFGCqkubjZyVtoBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tAJ2HANAEv7hn35rDz3fSwy7fbHx1JGCQroSswhyBBqHiS5virVU9Lw4EkMADUGwawShPY6Lva5WWRg9t13Wgp7",
  "key1": "NvYh1qdjsLZtfM2ijGrNE1SHgrCoK1N8vRZYTRW9Gbsr8vXH1YVvz6zBxraqtvBX1GStBL5crTT2fPrGgdsoiJh",
  "key2": "3kmYzB4HntzxAaqoc7AMSS3YRfgedqiTeEDXeW8txardR75HVhDTZ7N2RAiXKB6zmaXAwLcsHEBzzdK5ZjPWCekU",
  "key3": "3493Ywkv6x2cargrbBgTcnxsSuLByoBs9voTB6BCVaoJ34imFnQj3JQhwJo6CSNfx69oPvDFJocDFNU72smCyTZw",
  "key4": "abrdvxX4E6hwuzMtEGwKoNmzP6s8Hy2XxJEdG7VCVPyZaB1MrY6F3Fwrg2dYgQvQv7X5UKhYWq514PUV4G73qA8",
  "key5": "3KdQL8aFRAPVaD1M9vu6LtY9H3YYg6PFTPHVNA4cwuRtoCQjEZMkoeao5YVSAvM91uFbXCP2WrinK6aFsY3ANzno",
  "key6": "4MUYhwN1DKhAnKQmzobcKNL1HDXgA3r7GnPd1d7hoRF7ZKn7VAEG9ivREzHV1bihQa8zr9BCAEEJxJUgNqKoa4RW",
  "key7": "4pRoLFQKQ3HRNtx2eHGs5HXGGX3SqHYicEHMwt5aiQGMpmtfCr1mSHN3gUxkfrQ58xu3ZJsUFtcAx3wFf59ovXq2",
  "key8": "5bKbdPYSCdvF4xSEbqG2sj15f6KZ6u369RbB1MAuE7pUnAQc6qWiicAM2wY1o725ErRfZmT6v4nQ9p2hQ5RReuNN",
  "key9": "3yENQDZXH9jasHwBNvneEV4d8SETPKwSKyWkaSVvL89L7dLaYvNABM6pSNxLhFkygU8PukFzskNtK5uoGeMBavqB",
  "key10": "3bLbS9cTgXRXbofJijNy9D7C6fWdALj5JZBZV1ZFiUtGwcbSxZEwP5u6MoBKPNNhUruf7FJi5rmBkz1efFjRQTyo",
  "key11": "YicvrjmT6U4Koi8DHE5FVCxVkBCWdJ9wHFq7EXNxWR8p9RrmSfFzZJBcAGU5nue9XPv4RwJWscECw22eTA6S5tC",
  "key12": "3AizMsQJ7PFyA5P9wAnyfpPf46ftkeqctCxPvuHsHQ7NjkSzczXKSZMvpbLyzST5F9fQNFgKxHxNfjqCc39gRTNX",
  "key13": "3ZLyntcAScvRDFUoxcMNz77Uapn8B2DsRA6Zt5eipBKwoZYtmEx4P5VeRgiXRVfXGDUNbStEiw5LFv2ZaYQV4aAN",
  "key14": "BUfks6xgmTLjf3J89TU8QPhRc8ePAUnrhAnSoFTfkMZH1J2yw544FTRpfcZLBpbfeqAjv8qSUagfy9SNE6kZkj7",
  "key15": "3yp6wUoSXX7QiMvLpZEkE8oDXqDZM7jY1art64UJqvAV4ucdVLye3jQNhpWppfSRbWakvSawucFF7tEJJxHfA5Z",
  "key16": "57wbUBP889AmK5fzpmuNcK27PdiUHyQ7YgQM1oiz7awzQiM9Hzhwx5ZfLxpmtN48H8wswDqYLvie86i2kmsRWtEo",
  "key17": "iS2KRqSEz4asxdCRNxG6K6KPwg9MwHeYcgtwYv586DSS9isheF2rNKYRogNXp2ZJNbPKKGyZgE53qoyfeqWZgir",
  "key18": "5wsCVpTDYWeW1SmyJcRY5Qo8XfW46jXo9yUwpB13Ri6fBq746UJDiTj2JuwggDBm6vcDM3qkHLk72nKQT5gPsT7V",
  "key19": "5RJfRVJjw7gpH2mCnJH8osRGiH5Zz2jXsJEzN4SXw15TyLANhjbbU7cLeUmaUSxVFLpG5wL5ewZmmUG1w8y3FWoa",
  "key20": "2F75Bio74YxpecwjVL1V8SYDEoLaUaU9ahf9yVmgDsWTMyjpG62XNWxuKdJrGwx2HzfiHNaZzrd7iT7pHUcMg7RJ",
  "key21": "5vksfuN5NBcKq7huxXcdoHo3FM8xtu8UwAR9LFeSzbdAyj2ZmMVKWJqmu7sHqRxDsmw7oQfCxLBpAJzQYpscNfnz",
  "key22": "5tWYFVUqWEpVvMujxRN9eHuqTAGgRqxijDVQA72yDeSvXt58h9Qa7pAqvSrF8jox1FuNmLoUwsuCb8X9ERe6iKCd",
  "key23": "2pRBm9DjEFmKSKmPhZrLgvyfjQWNPzQ4WmvAvzS8tSxDLoSpysvQhwSf1WVLy7b9Giwuo6jByAan2LpyCWx2SvcB",
  "key24": "4CKwfC1VXRNFzfzqF7EWXQabQ684pLdPg6nVKngF6fRdkb2Xajh4kz1b4LYSJDYu8e1KfiUz4toc4HzKi3PcHZUf",
  "key25": "4mmAkuoGRcnxEmyQCo7QqvRDnL3XRrLeT6eoRv2vf6SkJWEcqd7LruqkH9vd64tpMciLFBqGYmVSrpLxhU9aCWCz"
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
