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
    "3xuxv567A4v7SwvqaUoqspTxtRSaE4HKyVeib9NaPrT4SL7s7FvubWxWC2MTaHonEWhN59GoCGidCQ84CdcRDndQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m7T5CWRRKXrgZYvriLh11hsg55k1pMQbJc5ohMZzoYMbB3tqxyJnFefnmymF5MVu3rhZAte66Fy3ymKjGJCRhdy",
  "key1": "38oUxa91DTpkKVxJimht5kJCt6PN4Nvd56R2qtZu1wGroste3eHJ7wJKqir7siULgE78mALzEYyxs2eaKSRfa4pV",
  "key2": "265wDiM2aEZUZhxVNRF9pFSQVk7orTWrat1Jt83vtNNUwVP92Kx39St2MzfLsXpoqiBSKBMFjX2bthG5EuB1gzwb",
  "key3": "49LzrUWCP7zWk1RCMGSDqYWfeyiZPA6MVWg85p2RYNT9zUEbaTDmtANVUq3g6hD9wS849LPytzcoEx84SmiS69F6",
  "key4": "yg8u3GJWGQUkpk9EEuXBStom5yCzCuWKNdiEUsQ6SUPe8pJWYExhmz4UzAH1EkVVptAXmRYdTquxWruBgm8qocE",
  "key5": "3B9ebGB3koEQHB9BoVjh7kUoc2E8hVmqinoTQny4VP3X7iwHy295KQnkngfkxqfj6PA5ndZpTvjHuwuRjVm74L4f",
  "key6": "5xpfbCxZYJHbfJTjQLgkriz337RY2KmscTDGT5d5Fd5rCixpgsQsDcen3TwgaBn27XSXEk7VvffuBwES7V63D8ce",
  "key7": "3NeiGLfM9YWP4JtBCc1hj7fS7TG6cyvVrU5YHcouAReLYotT86HPXoeANSqVzDqKA2VZzNxwtHjX312TPced8K7f",
  "key8": "JRC982fmrtG5PqsZFzub2gZkXPi1r7RUACJqJQznekfrJShHCkuDWparHCwZBbfQCqFyguWR6qdbG9yUts6x17M",
  "key9": "YqT1J494Le3s7i71D4MQ953dUYFnapE9P8q5JrSgF1TimybFEH8uXyXNxfZMNdqbhP4uyF9LNcCu87AyF7iH7th",
  "key10": "trrRuV7U1o6HDBpaWFn7qAuKqXFmcq7LZrdiodGpZfUHjY22o4DnhMyproE6iARwMgRkANKkXJuFRB3y9ahTVvP",
  "key11": "2NsJk5kymRQkTaHvgZhW89cfam5t3ZeJrjdG76vongrL6qFX88usP8cz6AXyABEhJww7nxFpq83kvmYDTwkkfaDo",
  "key12": "62V7dKk3E68ST27xbj5zTAgFd61G4y45ysRCSDDobNq1CqXpV4hXBXHF2RPKEghz5vGCWwpSvX6nghcCcdinbpbZ",
  "key13": "27ygXsesyBRbUh2us6m9kcf5PpoW4hCm7TeEqWjhb562osJ1nqiRHBjFtBkez4uj6HGMwfWLWUo3Cj8ZU1t6PQie",
  "key14": "5KXiZg46yeRzWVRJ4PTLibYN3Fyx4Li32hwGdYeuDciVBKfz99v3KWqzZMRzUX3GeaYvmDaPrvUEBunAHotGwjLo",
  "key15": "2smVJo3aoJPwtbs2FVN7bTLqFZ6hUYp2nMkt3RpujvSfckjaT6SQ7aRnL1uNvmEPbmTnMmrYhUKZm1xCB52PdzRb",
  "key16": "5jmGenHnY8yE9fgPxrvMPKJWzNxtVTZKUFahmC4JZW9fE4rKof9J7pdCSkUkyuPepQEWu1xbbjyt1v1t76pxFuVF",
  "key17": "3wwHiqBuvMXHdqs5TZE818LBNBcQ57AxbbN9kCeKf2mbGkkBd3kkyAT4xGTcbCVDdfoEcaXKVJcAoUiAf8iBKP2H",
  "key18": "56eoTS4tGq4U9rv1xQHVWy4PSZyTuJPd8iytt66vjLZgbxGhbwRJv4gqdZPas2p4vYGJN6pKR9irGocvg5vRFruc",
  "key19": "8HTzrsC14pQSXa7QzKt62vr4iNwkbH5Y8UUhGLohhbb5VeFkJWGKX8GuZpGL7XaABSbyjqcqLP557SdHQJ4PK88",
  "key20": "5RemmEXt3AG2LjAcJDPzKyx8sHYEKiNmGTTnJYUBNb15SDaK4Jd2iV16PaLwnaGx4X9oQv5CMLhkBDmBYsfSiefj",
  "key21": "28kpeoKM6ywpLVT5uSvtwgV8KuWrcHVGNBmN8iiZfhS9GSA7rApxym9P9BKxFWfqBjjDUMnk28J5GTnt6qpFWT2n",
  "key22": "3vxZLPFqeMA6yS9WhxuXYcK5nRFTdbF4ynDFBnpY9bhxdw5cvs4ppgYMjrWxX4TUJUFiqus9MFXHXbXWnD4efXQ4",
  "key23": "5QKmXbaSur4sfu2Hg6zTL7dJEfajmqYm98JfSgkWJKRXFXxCi3cc4iJYgVUg3gPHgMtnjyjHMVkNTvJAiSSbZLc",
  "key24": "7U41u9ejVgs5tCYP6CrRa1ZGFrnSK5nAeAxnRpkwAEYAwUMmrWF3HYsW4DfVmuzqoxuFbjPr5awcxfqQFkCD8fN",
  "key25": "96Bkcopm4V7AntJkAZt3ZhyBER3T9Xa8VtSzvKchq8n2BFBdg4z25k36fQGd42zuEwmjELodFK6ZQovCrnhMPM8",
  "key26": "KnFdgEDHJAtqJqM6pKDPvujmBUsE5SKvag2vLR3zS7ERAkpLXc2pGXnagPmh96RDeEU3e7HPes5FbdtnMrRv9eM",
  "key27": "4agswkMZR2rUnCL2SY4MxaS3oYZsDW4a9fQr1z3YSwYaHira9wKVn5z1BCaFhtnDEBkSXXvWGbDEMd7Xi4Jup8t5",
  "key28": "wLADfxikNVNMAq98FPyBxWtd4dTAPeMJQ5rmX2onTrLcb8xiafNsiKLsmYPbUfhQJMwJ3cxYZNpbV2DrvkexEkj",
  "key29": "52EbPKn7rUFXsQziUfRWEthdpNaY5a4FWvjdHffvez6ZYzMkRSmbTCc2P9YN7tjqYCH3rvU4dtkvD6B1ciusXWam",
  "key30": "4PktUYCuAB9jqtwM1ThJQit61KgumPCkhXiyCfyfvTpUryVYvfbCHB7ZgvQdjDTJkgjsba41zssZYg9S2CibgDgM",
  "key31": "3Z6jmxPk2r7oc2CqxWX6neqmVZQt6YCHBZYZGSxZPYN9G8HnWky4gh7TSroEo9StbgxsgHbGP8gi7WaYwcNkvjSR",
  "key32": "43529Q9pfyx8HRhTygDJ37JtCQh69qWmhTVhg31yCENb4obPjqeXuwcRt6JhuhD5xqSURBzYxMmk5fUjmc6Qhk9T"
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
