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
    "3Yn9STtnpdHF3HoEXURKRYKKjj74Tpa8M4eFFJGykUq8LrpB7fCxeruiLVqvWjLeFB3BCQxP3EXf5iqvA3c1R6ia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PSyq9DzCwdTiWCSaoA5WfNBngcdDsahi8vfE32NuH8B57BPYioa2ke6h4UTF2bE94urMD1dwncdQyiY94ySoUr3",
  "key1": "2RrzdT9NeD4db75MVrnyTFiAz33gcCk212kJSbc9DFDjdXZ4puewgTVp924S9USAFbRmnD6xjh9EMFpVZoWugFwi",
  "key2": "5owpeUXeVHtTswqxW2Z4JWoypBZRr2VRYVuSCEM5mHkyhmWKNPidmVX33wuoBd1U88ht1ACLYVZjg7ZoibNdRQLP",
  "key3": "3EEjSmfEoz5Nn615hozNuQ6kyDahT77gnwNZqVgR5724Pda4BHoU7tLfzfv34D7TX64wDrjrNu7m49CySJ2XQggv",
  "key4": "2hfCLp2rKn8x3ASvoCj7PnZzUXH767FejPTvzsBQNnqE6r5KHEEi3sWiknTVGUMkcYBoEe7vFF41ZYsKpG2eQFDa",
  "key5": "s2T3jMC7AwWVViwMPBVqD39rQkxCYmiEQULHfyQZDZ434WDxQ66aqahexvygJWcRHfgTwZuY5GnQ6RLB3NF28Nu",
  "key6": "3ViUUaHqpCrVMt9vq7Q21yUwo3CQVFPsieLzAxW3ng6hMCsnJYMVp6GXbCkPphA7R2qDCqotjqY9sqDYiSQCJmcH",
  "key7": "6538CgRT47BDgw4eitM1PKsCxQfEem8CcT8277dQiAzGnjjaVerkqETFbgrtMoSf4Dkrzua3KSS7DDoBjq6YG8Mg",
  "key8": "5nAnZSuQNqSku9HjE6m7CfQxSLigLfCKhccYbrvopRqJcHkEtdeyKzbCoyBn1eteCieJ2sLrDYaKt8fXZa1kUbwF",
  "key9": "UAEmt2k3JLTPECpV2d4ckQ35HEZX8zcPRMTKY5qRrwDD2DLccmGgdG6BMg2mJ1pKMrnZN6EnsxyziY2JZPjy3Yq",
  "key10": "47KXY77o14knUabR32cd58mfisKLiLEJVmZ46XTFSSY74aUaNbbdJLtRg4RMZjueQ24Q16wbVDykk9sFRad6uHr1",
  "key11": "38m7SBHao74mWyad7bVYPB4ncv8uFuzXLMbvDGdexAAc9Hjd6No5ATbQhmgs3EhqHmJc1SGtktRJGgPfszryAjWV",
  "key12": "5JDoDaqzu2KddVhHXrXuyeCGRWih1AxxbJBtK7EjAUuXhWE9nvsMFcYMwnCByXE8H3r2KGqXhFaYCXyWq4jo3aCS",
  "key13": "4qmxwJGoukvZjDTH1ojwxsMrHSxjERWcPXfwk9bQHqVp3CpaPA32qdyQj1Q6fRM73XSgFSkH7MGhnAZ8GQ9bHVC6",
  "key14": "3nYszK8sTCT3HNebPGD5hU15PyWmCvbXhpij2vLpmkuHGHsGr4egQunK9V6xmPPbP9rjCRpsiYc6eQVr6HR6tjZ1",
  "key15": "JEio6ghPEFEjX6La3sTHZZA6XN6Sr1JyJ1J7thGRazNPkgB2rDhftbKCXtQ5anefTfX1KKjE3ENN1oW57hmy6Uk",
  "key16": "3UNvzPunCEsDutV7rdyBcn1JcVArBYXpgWv7sqqwAszZBbtozcbmjiutzmK7P6MDVNTZrKceWb5Ex4W7DdQZ8jsV",
  "key17": "2VokGqEqL5iznBMSAPq3Rw3QsevBH1aj1rvBPuHzfZHW3EpdkkvPGavncLU4xkdxd4gwh6qqtaa4FprnJyi7MnpG",
  "key18": "XCecw86egFfYhjHDcw25GopY5QTChcq7SHVsUc6b6vGnRCRWMj7jn1Fx5sfuoAzzr3vEKFFyvsPFGrL7WEiodF2",
  "key19": "4Fn19eVRNdyVQt3GiffmaWaznqZEbg9RAHefgkp4gC9Fw4wJweoxVzYoePho3UjaFhoqo7kUbrAETLWYEQz4owPo",
  "key20": "5atoWaSpjNapji1eFfEVs6y5FUwuDipZvek8r8sjLUCAmuifFouDuX2MaFtcHtiSDwVbjajBr5YbHvbcJuEB3FCs",
  "key21": "3D93eCT2HPPWnoYqdyp5gANtbzbS9Yr4ConGwBVRD6kbmD6tpdKctv6ioiCtPZFFMz4qBHqxaeCouDaTfKkHRDwU",
  "key22": "34LkqnG5aWnHUa2qZo6CYadsZgVbJrXSpQfudTqoUnGipgjhynYQqPyGPkMoRH5wDCLigXnhCKJvZwzyzDjdzWYE",
  "key23": "5zt8DgtzzPd2ZFUDkywf5r1zxESHZWTM2EVpE5YSKYd3nTJtjdPcqkzTHaymt5DhzsBHqYmhmA1L7qAxVwzWaA9U",
  "key24": "4bLEHUrSyhe1Ufb1JFMh7xPJt8QapDyz6FDUJDMpEh1rfMkWCnv8CDsGqxfE7BGMXQhRhXtkctq6kgCwZwLBuN7D",
  "key25": "4GSdMHUKhs9jupaFmvLaRec87Wv12v2v8APy6k7U2HWSygZcKnB2CayPQ9SGVUM6CLpdWJHa8EzKn1HZFeAHaJCs",
  "key26": "2eqBeTSgUBwPbunHuMh9JggXvEH4ZpnGzrGvXi7yaAZ6GeWYByQWqppExoMu1wePAW5jyQLpbhf6SwG3Z88X3Kk1",
  "key27": "34nnBFTA4EwkKkUEwqqYAN3p5Y3moxgG8NEkZEpysWSjZAQk6FSPzmACwnzCRrT2SQ6houAnkV18UMgtpy4q7zh2",
  "key28": "2BGSV5wGzmcdtWjHYnnrRCXqWgYrWUH6w5VG6bFYNUxYth9kBQzMRyAvo9xuW3v1FXo8L2QM1nPiagvxxc8LZxp4",
  "key29": "5Uuo2q5Btizk1VZ4vrFt3J5UcYyJYQGqKLkGRrDs9ttsejpVw4BemYheqvzDF8ABV1SoWF641muoehMVdpHBWWQ9",
  "key30": "4npKav2kGLtBJeLNoxAdn9gHp24Dz67KkD4P5zKKzGyyD1uXRDBPirHgu17RFCfJqteS8aB9sPsyM3ovhxMVAkTP",
  "key31": "39BuTXvin9ryuCuioFeEmnHkxwp3D37nbFiEL7pfha6AsfTsGMA2SESscAYc5XAbsYATfiHGNXhw1CvwH5aqrfR7",
  "key32": "656mg551tM5PqxYuKzDmKE1X1NFyWH5D1wKpm6GfkamCZZufYhG9XaQpadZ2V8EecZskA5pztPanTFVDBcBMS7hn",
  "key33": "Fq7Ra8Ds4VCk7Snx2Do9i1RBczXf6JAzFhufhyqJxCKmbpjpfSxQDscUqqkMarQ5h1m4D7T4tMvPBUj3roJYVTM",
  "key34": "2N5YNmNKuUw1Axx6qnscx6pChqw7DDxYAsift9uMZs2JFemeoeYiR8ZTTfp2QJ7uTLQcBFwgHXRUjtm7GSPLfbsJ",
  "key35": "4BRprhiUH6LxAREc2UddWixFDykj8bMtopdpYEf2vZV4sbEd4GkBgBUZL2jWsTG93LyiUyFKw2p8izut3o3CtYZv",
  "key36": "5Le975mzjH46ZA4ZoiwuZBFhzuq6LUHn4dUd191WxqzvG2vAChjiu4XGYFnpjpA75BFHR2qs3njgjeWFsH5JfayU"
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
