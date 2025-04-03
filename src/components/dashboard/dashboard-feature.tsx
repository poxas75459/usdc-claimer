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
    "65qERQMd7DRUkbfbodjFFJ6Qtn6JhT3NLwV3ng2AwLFnSTZovBEp6xV45JNP4kooKJd3VQTjbcK78eQaKxHkXhHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eg2BwRE78wbBBqDBSCGqiztmPQ4d89WcsiV2QoQHgJKTyeqX6FUC8BegCpBkMnqEiV3sjsT1aZKffBnVBvam98V",
  "key1": "45j6KyHfEKUc48MDE5aTHbPiLTPmYuVRjSwfZTHQtL8RgXkkLkVYgofFfmVnt1ubzNJ6RNmMphbWBjp1xQrLJVdx",
  "key2": "4wvdUq1tfmDzLBcQMNbQnmX1bhCkKam5xzpfy11gpDQtvFYkjtc5RdxPmvp9bVerzW9XGkyjiZb23yBCvtLfkQd8",
  "key3": "5156zBRSQsaeu7Jtjp2MZcQdTs2LutjGySx2Ndu2s6AiCe9NygoxutfgiA8w4jmoVytCVucnzsVHZ1CatUauncfo",
  "key4": "PRaUs5MEZnbk8GSdDWhX4is8QEVyQs4nw9WJpNsumEktsRYFkok4A2YqsDp9KUpHkQBgwodx5eEFtfWaxyTK7N4",
  "key5": "3bodLWSL5GKULGMfMDnYVzNgqusDcSingmbyLnVbGmg1nzBJS8fuGJtifYaGVa9ysQL1AW6KTh2gm96Rj78GenFn",
  "key6": "5gMyvMANduLbyM7hvDdc6Tp6XC1bNd9kwoB5tabssp1iiEnnc2wvR4NxbMGesQxtom5Q9tfkqg5H1M93xyBeBNY7",
  "key7": "3bb78QbQbhhmLAQRTfkn3p9wPAXyArZwUhkQnbJeRyajvywxGb7WiN4UirDiqoNjKw7aBDJHmfGz417ubT4QcTKs",
  "key8": "5xscAihWTzaUVorG5SzpEd1a58S3d7BmooU5a5eCSTWcZLQTRuSR1ZhtrDiD7et4zjEAVKjYf4QpQRN1jjy4ozJz",
  "key9": "5PoTPCGqX5ffkBNr7RSdopWiUodYdoBaSmkou3YxftaEbGw6gTAHwcjoJVgdvf1BEZwEi5UhoHiomEm19FdAxHjM",
  "key10": "3ygSaZebhyx6hZ3pU2pSZm89GJKLtP12ipU4y3Nm2HVjrfhFGWgw37xUEorhzNYvXG9bM8msPf2CfEjxaKR8YfRh",
  "key11": "3sBQ2s3hUcp6xfVcbGL2P7V1KohA7ouMK42uZirdsJLUj6pd6reW7XRnWsBPwrmSH2sj1Xz6sTVPfmvAA3qENkuo",
  "key12": "AhVmvhWyAURrS9CT9FFP46oWa5u13GM3yYFku5sTm8kb79bw5zGwqiyFoAY93UnrLEMpZtbmREKmufWYaFmyave",
  "key13": "4gtptimLdqZKoeUuESFyVnWrNWKyVh7j9PkitBW9bE5yFbdWjkZZSsUsKqKr2rYATCWZvVpbDoSTofF6Wpq36Sno",
  "key14": "61d822fb7KroiEznG7b96qTe8tdVzcBf94qKb2wTVceYuWWGyCSuj1nZitix7GZJyRMD1z47QBZqouzBGbHyy6oo",
  "key15": "5SG3QaDu1m9QTHjKkw6rRry5djMKyYhjDqkY36YKJu9NkxaUE37MsD5zuBTnYsHFQoB8RDUdHmCMjpGtAe7nfm1b",
  "key16": "3YkWz1sHaDKfAfqX4KVhtWE9p7ediJk4FPBhaNYyayfgYSngy15escausmWVkVYd6e7QKCK6nQ53Uco6yPpSnmJ5",
  "key17": "3vJXnRzcnQkDD7h3ALHevTSjLoMKqSFxonX4s1VNkQ9jLzLndHjQTwRU2vCKHEZ8x9uQ2FZDjJhaFijJYJSmtXij",
  "key18": "sKP5Z8FBxi1EB62i8bxwApqUV29XRJ32PUj2TWRPZmgdoAtq6T6tbV7NzkZ3BaqHjTA9dkkTg9uKWGnHm2YdYo6",
  "key19": "3z55m7WrfKGWdon3kNf9k3dFQLiT8gTG1ikMxJHJu5ABbP6jRMKJ2Jf19CjCx944FxuqJnymrWSdsrM4C2Sa9app",
  "key20": "5KovKodg7Dt7qjcQ6ka4CwiGZnQTEBtzPnphJ1rcj4qGbvewjLLdtWMnZMCCAiCvkHRQWyKh3QS8fBVT29SbYiyx",
  "key21": "5rWBj6UCZCrifxRSdJmuvDXkhM2x73HyqMptbaVzj8SLWZ8BQyzP48ZLX1aGmX2gqLTV2rEAy1kbQnKhBA7mLnWe",
  "key22": "5BjcyGTwB7stz5fmLDrCGRBPPUKsHByks5MuyXEVN9PAARXyEstgxo4sQwi5vK4hjayopRx7cDnYvoXVnQmbvn5p",
  "key23": "3myMDrjEhBSBsaxtfFXLNrgqkpJGNJunXnhu3jA1AVkMBSozzCQz4cpgEfYNkcDntrJVKuLTvASwMrXAgjErZfNo",
  "key24": "y1RdNA13pADLZVMeq5uJUirXvMM3uCRtx7BxdDg9p2jgKAo7oLQWVTbtm1GaDJiRw5W56fWQmD44Uw6M9ribBoP",
  "key25": "3QCfvi4H5uFnzumTM5Uuz5de2wKAkMzSd3CA7rka829n47pPByGTrNKtTWrASYht2tZckfu41a6BpBfGC7dBTRny",
  "key26": "3eb89RXv7ZYKogGtUBHpFb2HdhRsQYmCEZUqu9kwVcyJPyLd5C9WpiJExfysShMZZKBY5iZnDzdS9tUFffvU7GcM",
  "key27": "5bn2jMqtd4QvTeTyK6EH6rgqK1FKNF7eWtociMTGUQsrDxibJuPgpzAFAwibup8mWVi5TTFmtcrdFZNj6ZWqYcGM",
  "key28": "4tBRP3u6WMRh3fTwXvLttxNa6sJwEWYmTQApQKrdniPVzGhnM4cJCqLRdUfVV8RaSVSWMS5bULuGfC27gm4JWJQT",
  "key29": "25PYFwvREfb2AKSc3EuY91EB8iZ5akpHnKLuYBNXJxD5Jt3hC3vyNwogYjez9HBywG1YuaNnMCXHSmpHohAKBXE2",
  "key30": "4tnMysF71YZbeNj6nPLF5psw3KJAyGDwRgqTvWwEkqScw78xPDcYAWeTGtWdoGxAJVbXWjCFWTquEXCkn6GGc6y",
  "key31": "2b39fxJNnC4TBdQ91zeEyGTPYd9feYUvRvvFTidi46fKCU4vr65oDE3UaQyYE1sWh37qxdPMiJ6gZo2M1iJqYYrF",
  "key32": "5iP1WGtYJr3shLhuJDTCPCscrotnhXUtGCL2FPKYH4Vn6vpfiZSRTHdNzNzjUvTt7Jj44So178hic5JbKCtGVr5S",
  "key33": "4k3BkZ2xLeaP3Rnk7bVEpbh8rr9EkhxPjmQkGoA2aAAJe4rocSCmXonDH9z3rgk3RavWjYHRPvQHxQdoUshpEjFC"
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
