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
    "4wMNgRwuMb5zcZk1G7uMfzk56N8PfaWivvV81DymjosdevXfgKiuVYEqkq6bxX7MNTX12DNt51GgnDWu2wPEEv3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v1eEGHEaS3BvYAwMKaeyiZ8nE6KBBJt8QJVHHwXmVFuunpBDDTeRTcFft1XmitQodfWNg7QmpLmPUGDPf5dzan1",
  "key1": "4C6HdPipjmgyA6MaoNcM9BzEsD4ZJKFQ12M96vAE8s1ZxjwVTnJGfh5KtLdrQt1Jm7R2C1mzSk945BfJZ8Tfuirb",
  "key2": "31V5gg6FLY6ncT4tfBZ2Lya2gEKNhUgLFS3KEX6h3xYuTHN5RhRpZNhSvTsEcZkdBZmVB4mj6b23MfMGhacbTU5i",
  "key3": "tBUKittxUMhjuK9d2dAKoHwmzjHpXsAC7e9WBzZsPg1K7HyFSVX2rxf5h9wwHPm7nSJbV2DsWKJ7vjd7Hd6s8Xc",
  "key4": "3cyxJ3WiVwNWzAvtMApcJvDFYfVGUXweryBRWo2NgJ36xT7W8AW6vmxzGcdiF2bknvHhxJynVZAYUSQETJNmzUqp",
  "key5": "4nRT6ykEHGuEJTP17yquVtsUutLX7pRrq8J3c6QmL1SJbS1HjriC8kdpfjKWeaoUS94ymWc6F8DaMLZPUxRnEEix",
  "key6": "25rRhrKbPoZdPijfPGxQDq8D1izjMsdko2HKKZCmDctDC7HX68trbydQCu6briFND8eEWKEULEJxiwExutZoMgZp",
  "key7": "2DU6ZPBztDKwy51pZL4Tgb938RpLRcNwZoFKj9GLXMbnvvpnh56ccgYtEYc2YgGPbuvCBGzocwGBKSjLrykn1QfF",
  "key8": "5z6UP8vTFejZWAqbtsRNBjReFrvkQJX5Q7x8fhCZedwryN6pTEsn4okixMrMuSKdQ6Xcgr6Mh125jZ2u1CX8eYhp",
  "key9": "3L1uaHTzP3Ba8Kt9k6baPKZG5jGivCwD8KSHYbgNfQKC71ystWeEyQCbSPnaCMjctC6eVgDB4LCSBhS52U1z8qJK",
  "key10": "s7kQt2Unhq7uTUoNcqXjTW7VwDNsf7CxcMWgRzF9Dvt2y7MkM1kbAVB4squRWqQ5amFgkzPTVZioYWdZEpFBKhC",
  "key11": "Q1kNsshE5U4Bo2WBU9VYQd1GJjYtNvj8CsmgHBF8NUgkSDu6tXpPveYGdXUsEqENAG16dPr5tCHDYLtas7PAgdp",
  "key12": "5XmkZJn5XUqEwLv9UoQTSXcKbzVwk75FKx1NxbXxWmaywvbLM3spmT5JaenPdYctjy9wncoo6gLYG8cupRCH8Fak",
  "key13": "4QwPeSHtHTswqgbNHqLyPfifyU4inmYEF9nEhSLJfp2kC7fNeUxMbuJvJoNGuBMNFf6kYbsjqioAZizdNc885Ldn",
  "key14": "4Ki363UmdExt8L8YVo5vHToSYMFMkyyfpsb3Mzf3dqfgE5WGme5bQZno3xfpBT1GfhH9ooT7VB34N7t5d573WS9y",
  "key15": "3ZnDrZ5xZcCxH8prgu2nbKUgTZoR1TnzhqvEWWM3f6sYTarg6f4AuPRpgRT4mZXEytVE5qYmrDzEmADjXuB6kGRq",
  "key16": "4rkoMPjcsSba38qatpZKPGDZ6R4qwuegUkamtjWBEK3nvWL1QSPCbnd7ehNzXHFf7DLWn9Pi1fmbTbWAwe2Q22j8",
  "key17": "Bp8pCLkkAHM3UWU9JpVVndPpsaPP1PpWBATfFgiLvdRPxtebrNcp9HRCqrvYQKHTzSw2bhXNtCfKGEingMXF5m9",
  "key18": "3gipnKNzq6SMYTWYwGFdFbomPvGE3HB2GPtfME69NYBago1nGurQ3qmvWqKEot9qhGWxRGfZnCAzxTJLTqiPM4ho",
  "key19": "4UhgdCMyk8rBBrt6KQCDaw1i2be9k9yrafbXNvw51sJVFPHFpN3UhbMcdcksu8fE3bKoKbnSgTttJTkM7wR7iNEP",
  "key20": "5wnuZ5Kjioq4GLTqpwkJivrBNPTUqvF19STakzVR4XXuuhFWKxb2qH1NCuPrPEUUZVd85mvctrWFahP57FWQkpXK",
  "key21": "kifhvzHEDkYUudAu29RQchipMzW6YFPFpXgu3EWEY1DCxomCuHcbiXNQRX1jGLWdhrXGFefwEu1ozcGxjXGGYfw",
  "key22": "2tVZU2FQi85H32DEaStE8kcqwxsqa9kp1TpqdTBdnSvJ5tfUP8h5cJfthaAPT8tVUZMFNojZcY6LseHcQe8Go7Yn",
  "key23": "5gQZucFS4xJzfBMSd2pfKLymnCUPEmXFR4uzi8pXC1TjaBqraG9LndhEeTJrLwcq7cPsCrM6dnbvge2NEvT3MC2N",
  "key24": "2zovsS3QwDt1KPhrvrXUYhDUgAfXQ1LdBDrEUB63WA3cEaUDW8sYT9GEK7RCBgLVewDvhF7B8WMComu8DonUsxBo",
  "key25": "3Dp3pHW7HGhij4VzzbqG9grbkMWieviSQ4WBJqEbmJr3dDXnMZdb5CS1mkWRq3qmXnGB2JRMo6rek6WyEM6tp9tw"
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
