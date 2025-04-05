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
    "2PNpyvFbxHP4pFFUkDCwKUubErguk7eA7WVC8BRWrkFpncM2eXKpGYjjYmENLp2s1afszrvzYCMdaFXtPhibvskj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3amSQkE56Ty4C9Fyw21YSvPJDv8QSr4Sq8NGFSZqmfSYfLb9yf9vBrSkxCopAEBeKrQUnS632M68oRjEVRsVFNYQ",
  "key1": "2ZWigW2VvDJv9ZYUL8myNRfnyacgA9DaYsrSGkp5QEUegVJ1iHfCnrpiDxS71YBUhjeoUZppGG1VYtuVv7KzdEEb",
  "key2": "FmTnz4L36qFgpKYMCv9xHL4CTYByqK7wLBZoz72qfCd7bxLrCFMexgBxJAKzKhLVqBTNy9BdfThuW3BEG3oxWm5",
  "key3": "4vbbNQaL8kDw2e2C4eutBoc3hpK2mfzkpwdVwRoWxKfVQW5Qzfh71kZq4YhwvB7oYftw1PN25pus2gF4ZsKik8RF",
  "key4": "2ZbAvMjvaQfPiCm9cwJAAkb5KB4z1G2BkceJVAuW1HaJWEhN9TgyHdh2AbsjBc5Etv1Bw1VX3VcM3KBTF8DnrJdb",
  "key5": "3qxkz7fRNFQjfXRup69XYjd95ZoH96ppfbvtjvYSgwPxmsgD4Bcv5auMS1yfN136BkECwQjMcjJPdftcV7FPiF6S",
  "key6": "2qpgGbS8jAMXo7MJ2ymwGu4UAKiw4Exk5LK3qpqZM7TEF6WTdYQK5jqHFMeQTXaiD1BN51D7i3YcAJuayukZXEGz",
  "key7": "3AY4JYAqXUqehqNYpf7byg6akB52VxzWsVTsCyUkapnvj2rD91uMUBTzvRDTEgMWTkuhE5d2CNChDZFrmAXoj4Ji",
  "key8": "4oNHdxwgiBXtwKLRHeKu8LyZhAqEeUu4xWhjcevbsAfFzwirobY2qQD6frNxBVeHzjq7dmmgCzzgeYbi5G6Ej9gD",
  "key9": "3LtXTgLku3GoZjW23dburCS1kJCd7WneDQCfKHCBniqQd93rodgYHcH33wc6Z11i8t8WJjHZJq9oTdnHS9Mo3JTw",
  "key10": "3puXJGLhwwniPpBoKojvCRTd1z8QrJJy5EriDQhvNUFWBaVF4ooHBxZoHuAeoPcm43vjisQ9EP3ymY2iQ8aw2aT4",
  "key11": "2HPk5yh6UURuvhHQHfnbogvTxg2tnHTFD1Gr93xJV6t5ZKN6eubCQrtLN8YWUZP24daeovqWDcTA4xGT9sA8CWjv",
  "key12": "4NkouomgrN76NFGzQQQqCFUEjJjJewdgnK9ebrM1xC6myquxq4zDtQJEDCayKPbuBikUiqy6hrWhjdtVec2nKmiK",
  "key13": "5PF2d1h9K8apbTgEB7kPJuh4FaKW7bESJe3NcuwzMZ2XfG7qBZyykMn6z87QNK6afh4GiSYzwDgua6ZNTLGdhzDd",
  "key14": "4uiZvcqarPCwrJrxm2rpX4yYZVZ87TexUGYtG92omuWJU6gBiUt4KZt1PVXn9Rsnf7dveBFEAWzC1f7TANaecHjb",
  "key15": "27kz5aQyFcTd1C7Q1muKdaGLAc6Z2MH5J5ahLjSNdGsHT923CwYV7rqg2v13dHAzyotZeFmU4poCbmoHaGEkw5dT",
  "key16": "526R9bpfayzUfBCCXrTJuv5qduSpamTMLh9zxo8mHjbfLRTFAL7mC4Rf5mUus5vrGVrcowXdEno9eUiVtdUazLQP",
  "key17": "3MbL9cMF3jYeWoqS7xBogjNyCHqkiofbcgsvevxvmMJGQPiQWgZzkH5Qr1eGLPnfH9XgX4gWCw2FEqYQFzD24XzD",
  "key18": "2aijFoQgQPuQWJGrHUvEt1jWKFRN7wZUkgGxBtE4ZMGZQevpBHxUhZ6LimE79W3Vf53Za22bWNeZ2RLeonUVHTFj",
  "key19": "2c5GLMeM9UqZEHHrZwaKs4LsCUcYGXQV3AT6GpEaW7S7X2dxDwxKertMe4XjGB32gaW1QBREq7e7mWR2dbjKbPGA",
  "key20": "auKjTgGGumdjw2xp3amiLLyEjiJ2cGdPf76TkWyG4GeSfUEUcChhKJ98KFv6xfwe1QFHSs12RKbmH7rmkBs6WBU",
  "key21": "3nVRVBfp1We94Q5u8Yr77M1aHbnFbju2JTcz3jjmAoycLMhYzhBd87qqHM8JorLaAqSQidFYEm9Mfe3mAiyuH7P9",
  "key22": "2QDprqC1jsMbfSkUXyzJmgvSV44FW1aGY7BN5ujkuw7iph6pDhFGUKVxwS4V5Hgmpv8ccpyXbqkzXmTPNE7XKgC4",
  "key23": "5qnejux4L8vEpt3GeaC8yuUWw76Ubje3JUBeNxTraBd8Cic1tgQSZ4D8W52DuDfiVpgpGPvTpwD4w16bcgtGpUsr",
  "key24": "2FRjeJRdE1WUfPSooDqTcMvrN9HqzWDhCsqknoTUAKXko4Sr7fKeFwG8fdDDFh4aQLhURL1sT5x2gFFJxNsXEPiV"
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
