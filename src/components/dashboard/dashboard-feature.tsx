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
    "2jAM1xZ1NX1GvX4nd6HjQ1i16ABZ7kuc2vt9kLMTskLqjkqSg74rmA7u9SkLM5P96rNLiXNEbdUjGpz1gKoQwQ1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3APu2CPHQ4WV4cxo7kXkt1ucd5CN5yzg9am5mKCNWXFN5UCfrWAKk3bbcghh1pUacDicjrRYHXTTQ88QRmcKms8",
  "key1": "4iaAZq4UUGyPQQ6iKBxHspCVNUkhvEx7JyaG4y7w1jgracCfKTuETh8crhXuzLhc8vd34qywtQepdYDZEJSVZNWn",
  "key2": "RUjQW71NE8WwsxKcTMrpV5i1YgLYzjFQHrT3nJPSLG5LjXSmXX9Lt5smAGXnGS3AKPk9qUS1JkHWigCMVFYVD8Y",
  "key3": "55ugjmSHTVihh7pawAojX3htts6tT69cBJ4osYafsTti6LLm4RzC48jEJVuHfjHAoSrZ8Bxz2SjN7rJu5bzdvW3s",
  "key4": "5o35ENaRjMy6L2rd4XkDXZGb857F9tRpCXfGkrkt9gsURBsF9oeMVqwZXTtWMjr6pai49e4APtU3sXhzuRm5Tnr9",
  "key5": "2QmbMEvMs1vNLbpDvxpVNPiSBYYtCzJgGSKPALQyF3CjaJ1oc5kq6aVvhHveYE23noPHV4bUb823McXd6cGxLTtL",
  "key6": "4mzbrEGPwifdRr7azaFGVEpigAkkctcBZivurUwfrTbs7rm7ioR1QFSHzJU8RADEuFEjxmnyBwQaB6iM5K2Sdfqt",
  "key7": "4HTAy4qPPwGNeszXr8TnAPHwnXSJieJUWt8hEB61idK3z7D6tFjkzikFWF8y4w1wBVrsV2GQZAsqf8eatiDoDXrQ",
  "key8": "2PE7fEwDjXnW4BAeAoEEjx5xgJqdU4qMPx6NXt8GXNcTKRcxKnPQBTcjn84QLq933TmvCQbzLgxkEsercotKR4u5",
  "key9": "3LuJVz9P8fN2gDTehZmciKN4hSJPvZmLWoVYFdb23MyGFwnWLu3A35Fejjk9S2H6pVjgHLxqNZ98FDubpoNZMaPM",
  "key10": "3zxqA7HP1Hp6PRnMwQgaChBw2Phjv4wTWX9heDScpqnYUBeqo3S3fzqmsVCDkgAuVM1bBHr8241sbAyGDcCGjmfe",
  "key11": "56VqwASLD5K5XKZGvzQoD8tGFo2WULn6MUdQEbjw5NJeFZRCZ4RNU5MGsspLJndHZwEQW5Cp9KN5UFTj9bZV3XY3",
  "key12": "5KjxftEA8SrzTmUbDdbdpo1rYGd5bN2Lvh7TWnwpgjZqZq43rPhv4xsQBVHw8LRNddX9MjUTeWg7m87KHySuo2W6",
  "key13": "ZRkzkViAXnCh4zhuMVmNBgx6wbycEQo4fvfk4vsJPgSUnayWJBDcJ6tdbpwFdjcEd2sFS8FeQYZGmSP1utLo3QT",
  "key14": "4yxxmGfS2C2YSRhJbZkeXwT88oBUpt2PBLEC5cinTxgB2hR1mMGrHRYMeLcm9awH3uG7jvHmen7T3nxMLzuUHr4K",
  "key15": "2JteJXNRukwWEe88GZzMu5KMiRhNo21eKBj5DPbhy2VPpBNboKv2wzFCg2BQmGVkx4eTU5M8xS9yfdeMwGbgDE9h",
  "key16": "4y5xEDo51Gzo4r5DtTFQYMU4viQGtzCXAapRMRzgk1dKYSmVDf516nghfPdtchFqPBibbkbexv6sK47kYvkDsUH5",
  "key17": "5QCSnJJ3C7jf8zR5wQgrnFEPqy2gqPwWhK8n1sX14HbFhUXNRCN6UAkZHerdV9qT5VNvmdEDvkzmc6FzbPSkMtUJ",
  "key18": "2Pp6C1hnV5nUWrPwVkCp7Ttrhqx9Dd2RaoNq6qCxGCBfuJuKqrR3hGGKBA3kmwxnNzj43J3EcM2AETjvjagqtyRd",
  "key19": "4VptqyPxfGeXzgwVhzAY9dJP869vtCCjau4EKsQnftzU4bD7gJiiMAZ4NhFc6easWwfUBSPgpHsP3SN1q1uFi88R",
  "key20": "5rmQE2obtdK9624g697Mzp3c9kwEWhAbwTs1Ao4atz74bngYCXGFNxHSUknuBVWWmmrYs2vg4AvDqjQtE7JnuNki",
  "key21": "2di8CCq2vsZptNjJ9jLYJPTgFErAFJN8gkYGdLtT8UW7VJAzHw4aV3uxqWunV66PMiZznwqUSo542G54HZSH7qbd",
  "key22": "2yFXsscJMX4HizCxLzVNwA94pCNBALTSYDCvoM1jLzXHjdjhDHTCge1iVzZrjQmgnTp2cGGaSgecd6XrQmpjhJaM",
  "key23": "ZqjV23rtnES5psqj33QRckRsE359gJgVac5N2LXJDqvaKFYAqHCbBiqvudJLdPTgtsKA8dhcNxxZJjig2zr7BT1",
  "key24": "4Hm17jYaSSNjWy7Bspv7cQfA9Us2wTRtzuwUT17CfTksEufKGZiskcVuASbJWVq4fKRYhBNzJnhZJPNn7TdxxcHu",
  "key25": "BgG3FSkJhvNB9Se2SerxXoAGWY5LMix3aYdsPLR47T9gfeKYAaUzu41xRhjhS893rKNYZM82wKN5L2Swax2quAy",
  "key26": "nDkfAnUF9fczBmdrVLmQYsU254u85NCJ1qUJ1F3Z4Fou1Nn9PA1dtv2iziyMayRmFmX4uA2UVYxCJuCURa2qhJt",
  "key27": "2GNKPpGGfTnsgKbfmYJjSGC5qY6hwsyMokQRToabS9gFiWLf9xU4jJffYWGGRDngMNFpMhcoXmRzpgZvuT45rGF5"
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
