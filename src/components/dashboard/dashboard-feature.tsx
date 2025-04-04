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
    "5pzj5jdymyAqtKvxZU3HKLkxJ8ub3bsoCDcAyzXpzkWy8tJ91GEV7VaBWduquBkqmJ3JF6B7CPS9cyjbXjGEvWzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eAyaYCYZAeaCVycEWHdBBNQhbTJ7f7GFfQhJcFtJCWiRg9RfKftNa1qKkuLcV3YKorWCSz8jANdjhpyuYq5Ey93",
  "key1": "tSnL91FQpHG3hTa2N6N8AVDWZpCwbPSvnCyjdBAS83jFuaH6tyd9Su49XFKi7yzj71AopobfnQCNBfhFx1kFzZ1",
  "key2": "3JJffenbZ33wgLqQVZnmzk2GnQiL6nUZ69oDkJDF8KcLSsuPJneZhvpocjmVm6YUbBg418ZzjoefJCX7GBnrYbhy",
  "key3": "4EFBkygyZi5EjS5GMKTbno3DrFHxsDsDVg4MD3vRhJnqLbsenHAC62vcsMKYNkU8QSZUufz4N9ky89EA2wYAEEbN",
  "key4": "2M1WALZ8KZMn45Bixuxfp9mRJwtGog479oamiffHHr9Qz4HXiz2afVnhjY46hGDbwRzhVEwpCBbRo766acAprSgR",
  "key5": "2eZvkTc6w2qUnqeUCJRrFpJXSTEs6BHi7Fij6EfjKn8eh1LJTVaH9N3w3Ak6BQBYAei2xtrCLYTrMFNuQ334fQyb",
  "key6": "4UWpEhyB77hHS5Dn1FTZokPXY56sjUXdfHs2vQp5oqaxVXqQEN5E5aytygvw2eiBY9eogmFSeSie8BXWD5QYad2u",
  "key7": "3Hg38wfJjf9MWYJeu2ReAGx1LxZU6V64fvtsq9S3bDWfSadLnQ8LhnbKw467siBsRUcus1UfawWNhvPq3Xm6VgwC",
  "key8": "2JegJpGHwTosg9RWgWpqi2JtG4ov2XWeJuosznXSsf1UaSaUpM6zadFZhq81Yrf2EYQkBZyBAghjDEUaU4s6BVvy",
  "key9": "TMKXF47PRS43PuGmcnUCU513T7LtR9E94yEn2YWpquEprjGfNGFmuZhCeSpLeuUyj5LxH7VocdzT9eCeH1pbAZz",
  "key10": "XUp2UcmADGZZ1Hi6hoibBuEoGD7jSusHnnsikBQxveLGB8KyZhMPQoaunnmabrLAK5q3Aa5LMjiMVXuNwCwJTsu",
  "key11": "3oiTRLZJ1zXtMs7tvASGMaigyfF1BXbycEJ56tJ2MdcZCDtQhG9SbmDTr3ivBoUUg7pCqzVJaFNU9nMvM6sARXMj",
  "key12": "4Aorih7NmcnphRnjmY2wHdrEtcfVvFFCewuTYJnFWBMssnCRqkv7eozKHXtthSrUiFDAHwQ7jNVNVEV4cYW2YzAT",
  "key13": "27y2d2oXjdSVMtveEjNh1yf5KUM1NWyFk8JMW6AVMbQYKYTpiZazx4PbZb9k43ZEd5HdUB4Ed3aQowxx5MP7GwpD",
  "key14": "42wPBCphtm2AXTTCbu36JtTV45TvjxhSHPaGxyGi6nUxqMEF1PMZcpzYL9RnyTmdJX9ZTyKFwg6HVV8kRbh1KpRe",
  "key15": "2yr42Pg9WDzrBzunaKYTj7q63eXDqje7RAnY3t8HYp65Es4oqEz4HdjW7BSvRUXKa9YbXkN4uGx8stJ5yhZtDbEv",
  "key16": "fjEfuN8x19xhh88yM3cf48jC2ADS4jMu7DKk5Unix2r9d1oKCoKhTm5DbXfLenQ2fpWCXx21hGfoqeaGkiSRh2P",
  "key17": "2rZpzhMypN3CrTXfz6x4ZKzVRuMboM6YhfXFWqeYagsHTf7RYdHbSvCrEMbtt7eYHfFzNpZptJA8G8EmdgZqnDhU",
  "key18": "Ntq1Xn6ZzM8wVAUKfrQ8aR9ARjXLX8w135Rtc8nW5KcXoo7JFJqEmUSV3XDMbGvTjGSTBygmQcaHS8Z3GTKhaAg",
  "key19": "4LaiNAeRjCcdEC3CtQ3jhT8kEQ8kD1mw5AxsWLb1TNwDMJNg5BSCTtWqEqWnLsPyPjwLcyy4HBjnuXD6DS2TY7RU",
  "key20": "Lac6HXMpS1izorMb1ZbLXZuHRVyN3Bpf5dBtNcLLxWTS6F2EGcNZQBTqUa33k8mskTgCrJsQk5CNcnrCm8rSJ6H",
  "key21": "6SsBoyPFKZFDNvsmwxrRsWkN34hng3SaE7YNfpFFactu8sf6jRJtSv1xH3kaz1FJ4hZUBAPCwkFVW6KkpAZheuU",
  "key22": "4m69e9qCYCbeFa9jcrtcHG19Zg7PLFzmPCYsxQRfrmB31GqAPieJRkpn149eec2usRszaJh6XnUQs6iw3EBMvUnA",
  "key23": "4tZrdV8sd6J4yFJbAQVW7omSgrFg3KR3WX85Yy4pB1iK4CvFbkPkSXvWuBgGjGENmvhWaLqTtcfxhNV6WQGNPnC1",
  "key24": "3ji8j1FPBvH3czoidoZRzp2wg3t2p6zmgVKVP6WgmVwXgkpueZUAqkVwzqkwUH7azS9Ga1iPKucmHVA16AkWscFg",
  "key25": "PWx1NVR35knDawPZWvKyQUd5hH3VWMLuYzzQqSL8paX3Hi5L4Lm5kmhovEBQc8Laq8tBys81ofNdX68v4516jBe",
  "key26": "4k16iwq2Yuyh71igBYWYQttCrwGtp87LXPRZkLkuvuTd14Nuz82kAYQrUAn6vrBR2HJmqYc8XftKhLADSyaphzTW",
  "key27": "4bNLwvHxzoq7tCTj48KQpGJRinCt36jnNyzA7t489rLutyYHhDbbMgq6qNAsCoAs8hgquCcvfjgr7EgkB8CLVFRD",
  "key28": "4bJpxZotebVWfKsZPRq4KAPYAJbyhhfK3guvHjJQFMVrEZdYg2sznD2oVqnJsrTqZv6XJBKQwyh9vpqGdJk7aCHs",
  "key29": "4fGD5AbTqzrrV9pUkLgBVpMvES7JrbFgiCYEjfiZBUarRs5GvysYdwmDBTvQdCMokBcpJ7EEdt7dhkz3ptjufAhi",
  "key30": "3Z3s1DdGEzxiF2zhKBjeDbnLh6crb9Wr2aELPs8HutgEWpkyrbwL2CPmueCfbLMDoVKTgfo69FtjpgQW2fNk4nBw",
  "key31": "2MZfvzJXz9GaJRrvtzwgJwmt45Ay7gdPaDvjG42VoF4bfxsRowoAftv4827dMjAbNaium3AP8XXCiTTA8bRePCf4",
  "key32": "5ETuUFXLKdtQRbWPoaDjUsJoUzozCbSLZpFwdzMtYtCMo5xBxQY683cNFghn6nHZNh4aJ3mUqrroQ8CrMzPd2Xbw",
  "key33": "4ySGMN2evGdeDGQhfCy4AthMmkkCc6Xnjx8Bzfmv4HfH3XssTceaBb7rfNDwgV3dsgtiZHpjohgiyYE9adsMxzfG",
  "key34": "67DgYv4Q6Cqqda2ZCLhxYiZKnQfXq48PjT6qVXo9VtoFNfv8yi8vgh5N7iyYz3WEFj881VhtwXYTDheHESpgZ2M4",
  "key35": "3EGXkfc5w6bdLMV6HLz9EK5wHP836k92b7dSpaaTvV8GBrxkPnoUJNDUcuLjAPAtNA4LDUY8uimQH2EnibDtUCF2",
  "key36": "DHXqGnYwYHnpSFmsTme6jvp7uvWKzAhLyR6yU19wi3Tkddxd95sfjtGVubr8924i6Lj5tiEVReDW7RmAEuvggh2",
  "key37": "5JvMxtxbMVciJb6iuj8qQwHH2SPgDYkkeuPeSTg1oenDkGdQ6zzaQpgEgWBS5qAfurDGtQEnSy4gZr6HuXLdm6wt",
  "key38": "4UfWK43Cdv7WXNm1hvZKCARAnWneAZR92RZ97UUha9acukWDemZ2ueVPCzfusfyUaXEDbRr4qw12dJ24Rc4SC9wi",
  "key39": "2LjsFxQu5rQ3AWVr9PbVd7QUfH1eyXc3b4fQbufgGGxnwnSHBHM75XJE4J6Uiw74MZVuyHqLCUth4yBwXAtXZbEN",
  "key40": "DBgidvKacPSAbHJqbtWqjiJzjbFjP9skAy3tmv66qTKSzMKj2Lu8hDSv99fmyW1qHojxpQYqTHLuRF5mdGBXD9q",
  "key41": "5vp6YNokqX8fkx8zJW45vykZEQNq4hY76GqNsh9msuSPGDiydwLkBz1ZuxCgrctoEknUisom9fkYY5aHQavi7sTJ",
  "key42": "jTJxjAtCryKicdh6bLBRJnrguR68uK49DzDjmHMxy5N71AbPYQdbaBZUY7dcxqnCCNEiiaESVmEFPHzN6SXxpPg",
  "key43": "3qex6mUKarb9x8dFaPPs5rRSSu8MWN936t4gxLchec1AHrjCTEyVw3bhef4ci41YpfRtRHZdvtGonysx3LzucK2W",
  "key44": "YQ8vxRv3izkdEuDxcPP38jvAurnpLgk88cZt7D1Hs3g8eD9cFRaQDD8xL5PcbmmNM9FXHQ2zGxKmmN9hUfR8pYz",
  "key45": "3boF3wvFv1PwZRYVayTHYbDYoMLu67xvGKHaprYP9ZJVwg9hasbjVtLrUJnEHbnvR4oESE7q54ArxMHL74GCoDq4"
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
