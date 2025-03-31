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
    "4xBVZK96sUgBCV5HanAxjshHLGQ24BBZqa63qb9veLP9pXERxUFyTpdGExmeXFuEFWQaYmbPx7F8N7feFjHjTqc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65HAoB9s9Atf4waSixyve9A4yNns27TwkrWCwGm6Z7rLpi3Bxm9woU39pMbCH3crRGfamVhC7XGD2cBJ27Ak86k2",
  "key1": "3jyCLqRpHjyePNDFAVszcauMk3JZgk4MH5mfH4CBnAPvFh6BWg9VpUng6zu1si29fp3fqH4tpoAeJBKviPhsBt39",
  "key2": "ahw292o1g7hiDQb4eSRjsJXNEweTScch9kBazdiZ5MHsBjPs6f8RJvaHPCZgoESH6HNKp3AG8igJey8cDQnX3qX",
  "key3": "3Nd1aNAM6BCeNxXfo8NPAogrCJTAQ9CG8Rp4pnaZaAn2hZTGuLkUr8eJKvZ9GEqWRLGhSX8MJUicnKU14M7J5GY7",
  "key4": "Nn5SLPQkzCNmRPZDxySvTQvFqbkwyhBAt1newmSiPza3ahKxn1UXP4bKyvrDFuxkZyPZhHzDXRv4AiHf6AkTiz6",
  "key5": "4vCuKnD7jWiTf6oEEL5LSQqdUWWnDZWWF6NXowedYyWXrEgiktTwcyxYysaWhAcQTH4jNNRFLHUAZqLsgutNj2vK",
  "key6": "5Tj967f1iTgkXojECsUNkSbXqjFakmQUuFBAFHa3Aqqs8jHRmMbvDvc75ivnokou5bDkJut5PMTA6SVswre4jbZs",
  "key7": "28JN6kgTdWxJQ28dfaqwELEAmCKd3vmyon5wP1CNwB3Tstq3qvHdiFa5EmrC4NMTibeNRKxdTFvzttQyXC7SNmfn",
  "key8": "2Xwc3K8DfmPF7KG77SRceyY9dgaPaJToA6wFT5FFdFvzoFbg7xDNQtVwaBTsWkiUMZWM4hP5enRB2wdCMjAh3pL5",
  "key9": "YepsWjzivomafcSeLjmsjhfdU6DRGFXBR1LvC2LqLxtVDpwpfVNAqfXnYHEvVRJBsDYQMwFJLs8d1oEjqpRyupS",
  "key10": "2do7cn2KKpAbCreGJbAwwu5GxUmiPsVuUzvPtM54QopyokqzXLu7SesW2HrxuevNDBSK6iWKbUKqH6bhr48HEpTU",
  "key11": "5ouM4bM7Us1kD5iJKXNma961Z1dqAn3qi87iNXapkzfDCcHKdzTtJiabyab3HozmuJMJDQrkNsNiyzkQSPNkQtdS",
  "key12": "4ZCv9ybvKb7pCmKNhApai5CdWCQaCkkphF4mFb39zQifEoUjunSC23q5pDGzE49LqE4621DxFRE1j7GHPLMuyYHK",
  "key13": "kQnRLEpWbuM99oB92PuNaBKroCHwxq4ekvZ5HfRkgqv9sivaSBjmmRShR4YMSNScQo2staNjGeDFGQFr49wUCWk",
  "key14": "3vTaUJ44qKQcq3CacejYVYqJbSd4SdDXxjyzc5kBdEWmpYZgmgMr5p64okjTyKbsct8ymSTChoSpSpSKmeWiCH9Y",
  "key15": "4AQhpVf9Sm9j8jD4xaq5BDcsQorZFRHksMAZnEaW4qENZWXNkmzw7iruqe4Q7LHH9dT4hbiEQtxheYQqNngboTqz",
  "key16": "3YmbnbRwVFgA2rKAcJKoMGoVcDDX7N3F9o7wMiNxLuBQjUGsfaFz4Sv5sRZKyN2G86vqLqtCu5uE9wodGGzyRYrD",
  "key17": "2Afbb8ejdQHLBeK9Jb1n5bK3HGD2p2jdvnbsFodJyU9dgerhQHyhur2px5ubBDnyexYTZ1FdQf4PDcGcfGHJDmKX",
  "key18": "4crbw3Cx1x6GGzVECiPLoNreSd186FNiWWLDVtgdW3m8CinViAwWVuEu9ZMw12TX4hSs1Z2oj88VReMkBPe35K6c",
  "key19": "54BrDszFiEhcnVoEsFb7421w98qhJBmi66MrLAwRzY3AqCqXGtAGx1jiK7iQm2v6CpFWnuogPLNKXEXohAKZiguK",
  "key20": "3iVdw17zjey4vaExzpkRqQFj9aA8ubcZ6sFBH4QxGWR1L8wwjXGgRzqwuWf8b3aXL5STS8nyPgTQTrMDVPB7zeXa",
  "key21": "41bDM5tVfUr5TwPytHQ7Tqg5MEhuNtSDasPn2rQfaoC2YktWFr7bunFPbpB5KiiGga3FcmPUtqEfU6dLK6YSvNqj",
  "key22": "5e9VMkqvia9azxyRS65Cog2yH4d8F5pwCHtqMKPr8Q88q4SnXMxAA3mWE5Jc55KYZYfAg1BRXqfUigJjWVyG9J1h",
  "key23": "5YYGKwiKwziMcP7KduaYjSet2d4Nij21bJGNPyE38VRBN1mm5xADHd67ubDWJAu5Qz3Cvhxnsej5xBLT92HSwrkd",
  "key24": "Ee5Bd8yRhxbcazNQd1bskE9KKVodniSUbF34RJ7Y6tEiQrzmyBcj6JdmRMaPhRQqQUKBwsdDSPQ1svxHswgeUtR"
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
