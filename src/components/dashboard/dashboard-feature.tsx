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
    "55QQWTwjtueLAT3wArvykk8rfohwXqBr7YUzKy1FQrNYRSon7RBNSaPb18XShfMLBCjVN4jZJtM3197U5QCsfMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b7QyD3xSq2HXfdSKUAExPUQiJGRVDuY8zRsUWoqbbzucYBUsMJmjbcoawBcyNazmDPP2ZuhidSytRLRJcLcTjxo",
  "key1": "3B2CxEp3eZmsZwh4BydNK8BM4mxsTbc4TeRgqcRrJ5MEn3NGnfqw7XTkxXXW2wHuB3qaHihvrwG18uNFqWrPWRav",
  "key2": "4dncmocsF6dV3uBoWqVgWAuxmNjFhaMqVwt79pMCErY725MxYcDv719dk3SBSC47gX33RzK8PWRPBbM997GZ9YcB",
  "key3": "1Pvod7m4p6RjQpTutbY7oqnP5yPt4KrZfEV6xgJYxua3Nt85wfiBH1DesmrWeZFX6GrXqLwTK3cstrye1BEyS1Q",
  "key4": "51MX4KpokjuwAvJ8hvKG2FG2BFPFJEctT7dgVtjFNryPCrm4UiLNzAoDLdvEjKGK9W4fURFmzoWLg9cZAJ1JEziq",
  "key5": "76HArR8D1a8USWAYAQevgaSRocjghkMXQTYXCicjC9wjDXwVK8C9UvcxMoVSQhunZExqGcCD7PsDM4z4B4YghJq",
  "key6": "LY6LWwPUuAaS5dfD846QcgKeje2QKCGuBTwRn4qE4x1zvCPkHqHF655Xscx8Z6KSUamhyVm8swR8bCCRWGFL4Ed",
  "key7": "Ed2uJpEm8HrKpS4S8F5K1BZRv1YCn9PUxyqbTy3EhBFb9nzrgHXdtqRoRNzn8eMvAyES3Jj89ebKhCG2fbUarPF",
  "key8": "4KB6hsDDeCJLfb3cWMpn3tRoFmR7EpYEu1ADtBQ5gyXMv3fhdj3R8ngPMq6AeMTEYKbX86MfS9oDRwLW46rWBpVp",
  "key9": "4tE5zyqR62yw7uoEdDuq1CU7pSC4iDXao18FRBf5aNvTBS332xwBcRAmXDjsnrjomcv9ZUATvJeGevLeoQDEUARk",
  "key10": "65oAirxby4Jhtc7dcd3svzk88ytE5c1bT82bErvmTEtunLsCYaBTNAm7jGj2G9owkxrR1JTtbySSP6LHj2yoPamc",
  "key11": "MADnnyRH9UBpMBrVK8z49wiFDfBvfqYHCC6YAqVRFnLqpHUg5nPZQAJCSXFXqtqkmmKxKrzJYDkE4EhWrKhG8Vk",
  "key12": "5Xxa3c4xmHjBA7JnD2ixaEnwG1jwCyYSDa54VvenKhPtkR1aE28a24Yn51xndCZiQRc1rX9mgcB8JF2YNjftUYyo",
  "key13": "3WZA6Mfk7g3TLh7FJ163YtiVTXfyEKVsUEVpwBL1Q2b1n12RsRha3gGKrLZnpWVSX7FG86vewN4dGKPF6kideczX",
  "key14": "5jhr7UdoD3YKLdYc4LPpBnWXFLLZSSfmyuhFKEHDwkJSVGgH5k4St6HtuXChG5tvb2V45rFovoTC6RThehEeBi5z",
  "key15": "5VS7cR6TiLUhpUtt32R5SeijZWD9SKuFYvuyZNZpBfTQRNjrNS8JQqPnhn2KUnTCMTNpvJcyeVE7YV6znXcwcveK",
  "key16": "5HXnvq3yAFNJZEBGPtgX7X2zXDKBMLyZfvUUF59Hxb241mEj9xJ4z2mwQjiqo8FEcHLZ4rFNmqUUas4AD2Hx4gT4",
  "key17": "kRGrAnFrveFLzrBvTyyKpuvrmN63VCe5AkqQTV84xvM6o7Ayowkb3tkDgFCZLa6UfPK2TZVKQRACXQSiDrXSVne",
  "key18": "EFtkoVMww2ZSbPY2FaWvw2DmcqFRBgw2n4NLfd4N2cppGaSzkqnXQg7LmPc7AzdQZLrD67MVrHrPtrp2wUDJKva",
  "key19": "45v731GP6wwjCS4myoVKG9mssttXjhog5KCwqNsqZp4QRvncBn7LEHdB9FZahnQH5jF1aPDidEvZdVUcUToAJyUc",
  "key20": "3RcK4eTmeJSehwfWKQv2jCZqck8eFEqQSyz9YautwyhtVg2DZNdvEhRv32egTcDJP1fChJqpD2ptePT5BkxLCgPk",
  "key21": "47DbiPuUoeZ8mBAALyhEgutq7yyDVSru3KUVhiaSRk8NQnVXeyZtKrTxgZxrB9TBQ236qCFByBMC8NxZMmcrYrkA",
  "key22": "25Ys4jDHWwG8YDufsXyqYCvE9qiyUBhz21utL38Po6TY7mDJHR5pDFq5dSdi3gsAgeeRt27KVMoUxw39ESpKfK1j",
  "key23": "S5hUFgdQ9yqb44KDKpf2wNLPmdmwJ7rHZhRza4CVSNAMczWZuuzASEEhVP196quWotvJ2KqHFvPUX5gUWzQDJXP",
  "key24": "3xDDmsVux2KeLQcPLR8cLhjws6j5epG7YgysVULZRgTAYRcJTfXPdmFtogvVwoNh1E45a2x687tUCR71nTDWit3Q",
  "key25": "5HY5LvPbXz9XU5KFCLH9o98CKHMXi7kUA9WUGRLNMwhLgrFKvkQUJcWhhmRFd9sGFZ1qsnMVKSQN9nDvofXGw8Fe",
  "key26": "5Bx8HAFkjvo5WLoUEADdxedjxT8xnWBx14N2cXZWQbDRsCskp1vbWAuuRza8xjmWZo5rLXxyJVffbZjDyJtduX5C",
  "key27": "5Y7AtgAetdSH43eMs3K49x9EYkU2epNvmqgkjnxYMC9A6LXkjXGtoNHLnxe2egk7BpWpJXhbwQhwQQnbQ3ATBhsz",
  "key28": "3Zq6BMF39SF8eWBL1iuUbk3fTZB5VPovpgFa1eMg12v3sFrDXoPpyJhsWLL6ZgaDbv9Cdo2aLGB5rRj55brkPUZj",
  "key29": "4CZDYQUzYa4XYyiTdzFUYdCjVNPY2PhrA4xToKBB2h6mY2akJWRi2V5tqPXc34Mfntd2a39s4e1ujSnptbCwJ6yh"
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
