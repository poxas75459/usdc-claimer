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
    "PEDJMQfGeHhtS443CgkbmaM2HYRBrwrMg7Cm4Hf5xx2Le7arQkzd8aJhEcNB2VSgwZbPchLj3S4K8nEhWPHgmRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FoE4HsgKK1BYDrJhS75NoU36UQyiotEjtQJn34gzedodhTToGw3PPMoj944NfesFsvbELDSzKyFzNTWev8jLMbJ",
  "key1": "41jqs9VrNnVqPv22Pa9CJjtiuB5GKsY5odTD7bW5vZ6CyAKPvERw33qEYwXSZ5ejp6sDjxByCDKfw1ks9m4pBaQv",
  "key2": "4bPwWzNo3TxRDLodc5bHLsZSVzTYRrTvG4WmGXQtPK66WZKPHLC5nw8ehR5AzzqUU7EUsgXTa53P1AdVrgiE3jXA",
  "key3": "4iSKQqLJ4S4jtJ9AQGRz3rrcKJHiwGfvaW1EnVMAb2N6fUQKHxYTPTcZUYYFsjB6s6n6H1Mr3nB72KFYjsf831F",
  "key4": "29thSLKVXW3KwrpALymKpZSxR9uj7tto7mf6sGkEunPijmJHzRqey3VhyyZQYRLpwF6HqkfmVpRSuCNKqwQvHjb4",
  "key5": "4soZA2acfZL4L7CzxamqEcrQVWxwaggi99YKFH1zHi9jswkNphoLNL7NgtQor7ofXFU1z97iBK527CEHTh9GbMD1",
  "key6": "2DaMMoCfhPMXn7FZ9reQgbmjBtWtnmk7vRgPZcRE7B7kTUnja6TFkoNgPrZoaUcwqKZuUpXj1c2JBjWYbsKycC3W",
  "key7": "2THtXTappv5ELuupfJHdQtwnM7n1iknhoUehp3TsiVpfMEFhvcLrR2vxQhRWrgNa8sDwkA3s57QPAqqe1zzVP85F",
  "key8": "5UQ71rtU6ba43NX7SjXn5d5GwfiZpqidutFDJvRbwEnbnsEFbMazDm6fFQRZRbmpoNSbUrApw8vjFZZUdKSeYh2t",
  "key9": "XyC53Andzkz95Njszuk9ehWYiyLnxhbMajhq9c6F1YZ6kV6nPM1MeiUWBhLxhQ9SmkVy7G3aPSJkSFVhe61p9Ea",
  "key10": "37pFq4bPdGFkkQLQHyYw9xpkQNV3tyQMMMVhbCmPTjYze5wQ6xM8oKUDsRywZmQ7ydoWgUeewCHyddbDVr6iPRWc",
  "key11": "3QoEcjewTy2en1NYAQdXR6zUNERzbmMHe1noEpNm16n8pG77FNy4Yve6NZ1mnDMd8vfvkRKDTjDK7jqRFt9vPVQP",
  "key12": "24Zrgkk6ohPx14ScYvQkVCH1ARGXmXMYvvUgn2Qw7294DGQzeCQfV7t4e1JPfthEr1WnKpQKiV6nZBqvsDqGBbdf",
  "key13": "3ZZ3BP7afjumaMcdMcS5wdE1ze8y5aiWRL7MnggtRzMeMS68bLfnGxhmgY69ZDJuW1yMhQ8XW21DFzwvb5aAbNRS",
  "key14": "493KsY4gLSz6dTVK4hnfvwZb83DgEzjgVmofiPza8c8HAAGJHFJFPyzcPNcs2nqj2BDV9GiC1jA2WVZvgci8xDqo",
  "key15": "5NHCN9W6unxf5WxPBPt7V69qpj7RR4SXBcQyPuhMwhr68y9Hof7qzBRqkv32k6mvwcZbg52zvt5fzSpkkbfkezKA",
  "key16": "4U2FMMQ1z92GdQMCGPVE3RJPmgNc3oRWxfpFHw2aZA9YFXahCeiJZLijt2cETQcPKyPwG7Bi4GDGotA5Q73xcQ3e",
  "key17": "3ezccs51ivg4U38UcdmD3Y4zLugqykL3RFbscFZ6tXZwLRSfHpqzEqmbRK4dyKWNCDndyzC2ZPuJQhVwd5rh9FCs",
  "key18": "4jop1CcLovKuDYUAeutacmNGDBDNUKcoisxZCqX3mKi41gtFvbNfzruGX3LdcgZf6u2AXC5TsLvjUnm4uytToemz",
  "key19": "M1foVgCQ433tR85kJfKRCws3GyeSWLtpZeZ36vkQkpfzomJ6vFLQexfEYZvPspc7KtA34xBNAVVuBmL8URPpxz3",
  "key20": "Hky7nB7j5PyQSWkVj8caDCUusC8aKFAbvHFzmcqx7jgprbiXzHjUuqX3sjadEVfpHwgGEQbHZ24vEqXUDRg6viW",
  "key21": "28SHFGDMKzQq98aZ56V3yXbDusCHTr9m31kEm1cYpVwkeURU6z7kLZPBJPWR6DxKTQ5y42M6tCguCMDwLLrXSUQj",
  "key22": "cVs5qfnx6oWSvEcF8nBoxB8ErFEusvhEEN2hawkh6rS9TpKrDyTN3Rpc1gNYYQMw6nZfwTc4m7F5qUX4nGwKf1v",
  "key23": "4jDbNp6ZPEeu3C5G4gG1HerVSLts4tpHAs3FvnGuvmWZGLSERaNp1mZ6SsSNSowynVedBVJQGYtpXrz5WU7o4RNf",
  "key24": "fa6Ecews6SZsgQehoTfDujFArnY6gjjtNTY4nqdfmp34swcHceHLZwqL2iemxYZFLgWpHb2Go3sgkphn7wQ3qvM",
  "key25": "3Mr2SEHV56oPmYN6WvofHv6iDycokAC1YyuUfYYSux167TsKQtnEzfcsnm3hUcYJBBCTAr32psAwKFPWheeuZ56e",
  "key26": "2c3wDZ4tFEUX5tfMv84ouZn1ensa3mZxZJpQo24e3vvwfiUeXJ9nkaAhWsP9ZP25pQXZ4t6kWpMxYmgBbC2R8w5y",
  "key27": "3rsoBofTAAbJnHFBNKyAXJYUFaGj4fBauPo25BYKvVnWbRMNanesuoJeNySLCFhCYfLpLGU2fD5uDMPKCAw3oLy5",
  "key28": "5NCpMbfSGWaT3fWxNGUHrz9dzjLepBMCEQeU8LsCWDnbKnNzH1GvnbuV4eKek6crcwJzA6Uq7RNbj8ni4CsPpNPN",
  "key29": "3K1rWpZML46jy3FaToHhBWif4fojZPCfzhKPbCFFunUSKkvcNyUh8BqscUgTJMSmvAnizhGyz11M1aoaZbRW2T1i"
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
