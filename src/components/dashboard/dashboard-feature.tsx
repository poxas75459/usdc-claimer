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
    "asrBpwtc4JawGGw7CCYE1M8Xaov6CWBqBAnPc2oqPwSaGpyZnnXnwGpaSEsPAsQoqARRPHagw89C8aETetqPCnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48xrmWZ3rfrD5VXTBYagKH1zko2QtKPuh29aqh3MyUTRiPs7T5G2kSudwdEPxrFDK6c9ny93TS879VTtweZ3cCQ5",
  "key1": "4K92ZMJNMkDw2ALRYK7yvjE7yp87BeorgpcFqtXiaanRXgzFCKrVvuuBtnRdeq8of8gEWtWEi9i2Pn3dXVHNk9ae",
  "key2": "3snigqgPVo4DPVFc89RZKfQMDKVLatcZJY8JvAErfhd8VipsJVybH55voEFioNM4YXp4HwN1DFNTcTQc65MiVcRp",
  "key3": "5yPewYdCqowiStLXgrwE5LTvrKaVKiAxCo9oDYryCDKCt85GaiZK64EBWaPX6SyYPp8YHKGsxCeurpihnjikgWL6",
  "key4": "4RSfYVPW4UtiSPPz5WCnA54W6YydWVh5Tv4wyGApeTyUZFTLKypq8aeZX2gUariyBUwiBdV2SGer3UVWNRaq2qx9",
  "key5": "2yUvojqGewfMRGewE937uVQkoSDWqjp4zNSHQkNXQQHaT1UsGUqZb4nQEC6nwCRRF9H5qja8wZweJwsDdKMeeF7m",
  "key6": "pipm7jXzk6YJTfdo9kVU3tTWiBtMjGKAaA5Uk7UYb9mmbVz38m3C3eUwYuyUHQSkKMYvBt7DNSAe3oEtHANdVPi",
  "key7": "2rWEbvTyvZzeBiCr4SffxgHcGQbuUbx9BTESWavN8V6UuxpujvEmL2oq2csieiKWi6inPpzBp31BB9sqz1Tsqcsm",
  "key8": "2uWB5YL9GE8CWFKKVC3RpvWmjKePnks4CGAmc94rpL188XUorfRbm36TvWYjAMBcaP56daGmGmswfeQr9fdtpg1g",
  "key9": "5qLbPeMWiNKUrSxthXWqNsunRxQH4if79GxtPcmsPhMcoTKJf3KTnwXce9XLURgQvpSGZK9btnXfnP3zkekbJQ5T",
  "key10": "2QfyVmecMNk4vG5qiKyso1e3Kvr3qesnRPxJQvexAHpf81UKhSCr3KdMQLNSTGGwY6WUzZYUCn5qmn5qi1hbPTiv",
  "key11": "vKtp4m5nHs9ZWHXHfrfTLaPPJ3BKV3PxYzruvTNSkhMDEvsZjpxHohuU5gjNoa8aFk7bGMhoPpzMHdYSoGQixxP",
  "key12": "3mYKAdr8yze32vQdGM8wHsiJEzHsp3gdMr8jc2AWp7q6wpC9FHYNaGxdKL5XPACFcKEA5Gpkm7MCFBrQkFM4BEvK",
  "key13": "3UrYkGDmK4ccLszeSu4y784c9s2VC67zYYDFoTdQduPGmFfyFvhiRhgLi4ADJZ9NxrAyQ16jRhCGMPs7gQ3FtYiN",
  "key14": "5QJvrfDUZB9gJBJ7t83YWhs4Xhso88MpRxMw8cnWCm4G77aLBYvVZNDQ3xC14b5aud8zyepixEhYR7BhjyMHdkrQ",
  "key15": "3k2g7bDkutyDZEBeg8qBYZD12txQcFYgWgNLtgLMZZVYrz5kKj75SCSKdnSE1m5f6uaZe6b8Rxybb7EqbRFda2w",
  "key16": "5EiKLVfCM9QdKhgk2nHJvZMEoMgz3AzjUybDm3Xj1MxCUKiFzXN9CLYf27xCPpLqA5KCxTbQ2PdGoaVgcpoNc7K5",
  "key17": "4jnCCGvHe2Hw265s4Ff7tw4shkk8qmqD2mP49schTqpbU3DRA2GTYGBUMJ9VHe4Sz65QTSG1fiVQVBY8MZNLcB1f",
  "key18": "5dK4dgSb8dbKd4FoJGSFyrxf7pEovCKDkg2VGt4PBiMacABmyz1Cggz31nBu11nLSKDUSQffgpYLfM2bgBd8Hu8f",
  "key19": "4XAqDK5DFhtSXNfvT2BucmvaEvSNiTAPfjfWNiiXbzjjStSNg57q8QYdt19myQkgckjM4ncd9LrpfUZTtXfCzeHE",
  "key20": "4AE8GhhZbssjoPLoftBxX6qDCgZcDZ8fMtqiPbgvBQjwSYYNrhfvGjZk44jcaKy33kYv9NZLhrdzUbaGEmFJELRu",
  "key21": "3vR9jNijh7VzpU1HpY76KHHPcBrMroutZdE4b3KcQ2mitvEZSXe6RSh7rPv5S68yLWZbBptCmMMHfdsC1VseaAK4",
  "key22": "3rA1pneu3XAAW5uup7WJpRf7SBvHyR3dcm4ATfHyLpQAeYbKRLnfefrKm1KgK1SizGuM42g5HhjYoLLgF7oKofVX",
  "key23": "3PS1acABZkWXq7MBdrCVEr85evpgwEZvQGkzgVg7z9fiSuxAY2ZPp3Qs63mFkzFajU4HsezH5JQG44TL4tZRhAfn",
  "key24": "2TGyj5vw8EUz1Pne5h1xJ9mPCYnaU9JU8spmgNTnpQoX3tperKaCFTjNxjm7qFcA2zx74jB3UgN1YQWsSAA7dQfE",
  "key25": "2b6WGqdRhkYwR7DfWn8mqGN8T9ktDM79xKoa4XyTfrv1E2D83EGeERrrJfURaLpi1xK3QKn4c3Dg23E1fZmD3oRy",
  "key26": "iEWXsDqyfNZGy3e61xsNiTF5CnkJB6bJvp6jHceaMHgWsjBe3Gx5xBpdBVafFLBpSFJsLWJ98PDGGL6im4Hgh98",
  "key27": "3ho6oPvayeXZ675pvb5AJDnBzPZYffVyvLJMjcKV6PHbAAgKp7FZx9Rria6xAxpybCvQvCyFe43qWjz7G36VZLAS",
  "key28": "3R5A1oA8KWncUGZetUN7QMPsH4fquPGqR2VoWMT1NHyicJ7CitFvSXWmJ32VaTkm42NPXRWWnRZuYf25ZTxEFqM8",
  "key29": "s8H1o3sDPbTLLTz9XfA7y7hFZjo1Wy1pVyQNf5mUsxAhEWCuAPbtGP3o7GWeLswRfiv3Z86YZdz6goUsEJex1GY",
  "key30": "K498jGNET8B3mev2GRXQojpuaLh5iPn3AseNE5uqQj7MKZNkScGB3gqaQKFkwQTJuoL3VwKRxhCaBP7H9wYJBmF",
  "key31": "3JcYahjrMD7cEatFsyD2cuXgQLdbPf7rrwmQMi2D5PTuGgDwCfYuCZqZVtyqRJKo2MHCu1kYaYjkVDJNJviEnUM1"
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
