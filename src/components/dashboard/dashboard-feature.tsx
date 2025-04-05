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
    "3Ls4Ee4KjXmzbdvd4QE9FRCnfSATS6LPU9YXMBdu5gzggWiu7qJYTDt9bvRniP163kz478toSzHSwUFY13Ydy3T6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yjQqmtXJvqksiqFE7LLnb2AYpiQrUfJFCmLdehzfpnXLf1NuqCrmGBQL1PXSnce13mrcuH3v9Fb3Vq7SRj4zAdv",
  "key1": "61KPNr6HknwUaBWF7vnewZhnd5EfJLrhVrVrE3bCukHyZVTaxwCyaDoVQ4DNT74nyXsKD6P1RMYaJ5WcajK2q9Zm",
  "key2": "3d18uea2azzwjYztxLVmBUTE3S6dmRo4RqEgoKe5wSgwKDDcEFjeQwAUspAQCUJwYrneKqaVtPknsSbgZFXEFLpu",
  "key3": "4kqKH9wuYoGJSBoxpXNx9sYaU9LZXmuuNUmHTGQM3i599wRqbfg1nZyFEWDguR5AcFooZ4GsSkPFmw7fxpmDTTrx",
  "key4": "33iN2ZRE1bUhB9C7AEE3YipbvVEBFWPLmhQMqH4h1QLvgX4ZGjSBvMiuki6Yx1muahSp5agNhhGnxknPwLGdDpoL",
  "key5": "471LUoykufdv7SjjvTz9Tpi3pXcwgzQ6dd992p8X6onKBBSEPVQWrMburrVC2VEvyGP5XAN1QAQabB6kLiqCUT5Q",
  "key6": "5rATtkwLYacGrwkMxDewNoC2vQLP1n57q4RMca4B5XeCfagutHhJ1uxoTUoK9RFEJukxavJLmuRKBz83GQec74Cv",
  "key7": "2QKGjDCL6BkqeXTHXRXV8PfM79vrEPMkDLpWmQ4xGCGpdQUMGtcAEzhpvwpGE7FCAsW2hwHLV2VTpSUHP3Wtbzha",
  "key8": "4mmqB84Egrfw8je8K4eYyGf5LnpfgxuSbGCppMpV12BH88bc7qDsy8d16VTEisXgKiGuz5D4PhLLXDdvRinfMTu8",
  "key9": "4LStmTdWkC2X8D4S7bU4pHB3WsuTFtCr9mfiAQ5beXDZMChC3n1A2AW4PkKZC6SCpmm3uhSqckrmQTemQNUXq9bN",
  "key10": "3WmGupKBxmUW9ec1ParLwVp9CwyH2qMyyioP1thf4jT6D3n2xvht2W3aSseTKPLEXPvN8TUrn8ebZPeRWN6erfx2",
  "key11": "2R3JJnbPHzDLRNChiZxnbZXR144wNjnmzCFu5GDH9VYfdXgTgAzuwabjoBp5j9YwfoMM88EBKSgSMUcPhvpQ3QTs",
  "key12": "2ww9R5odkGUehsYL2t8hx7fDTZTLPkKdewnXZpPfQp13khgrRzQVveKgc78KpYcPfZWS94j6AjAwFoe3Y5WKiYER",
  "key13": "4oaXjXfXTjxsS2StassWSXXeNk5fjVgWzkhN1CNQ3TV4NWWjVKDqNrwo8pNVJSGKgWL93qhUyP8bh7B1cUtPFNsh",
  "key14": "2f5pifrCHLGTZKotLVfC6cutAo7foN4M4yMzB4z85v2NXKWYugTkiNotVzv29QWqyeVQjTaBdrDBGov8WBH2aiuE",
  "key15": "4hZCBPqikCwYRS8btYmSFwF9yYgGVqRJoxkeUCLcg9ZoELnokJkbnFRHntFLLpbqiL72u9bFZgeBUv1mMAXPWRCu",
  "key16": "G9APwv4DMDcXghRRWtKgye9f1WahUu1WKLHjndKS55LC6B593m4g3mHQRm36dx2KJpjSfYpcKaNgwCMAtBoVC2U",
  "key17": "46qYj6CyHR85d9c4oUKbALtqPaQZP3HAVWbVYzvekvMA8YivXfNmqp7B9c7ctqVwaFFisU3CSMmAgE8nLmbYtXGL",
  "key18": "4A5u2wDyuRusUmnbsw6oAhKdkTGYovkDU34SBD7FiLtAbjxj9CAA9DNFMgrBcE3W97w42sCwmb4aQV26Mng1F9Aj",
  "key19": "2CXDr96ABDjWUTVk6HcXn7dxKiiTBa7M3JYaMwDwraUb7bD1AeC1p5Pq9VsaoPZAPhm6gAYjXVUQqUtkUc8Zd6oX",
  "key20": "3h71KeFofaNnqriJZge8WPd2QoYxFwtYGS4bPEzKRQkJcHYYvW5hZo7EVZ8KCi9oz7h6r2SZZYpi7v6x6JsQEqAs",
  "key21": "4oBQWg39y6tv3nCECef2aghvJ9DPVcLCEfy7HyqBma38Z47Ymi2rVzZaE8sf9j4jMWFC9FM3xUNnhqSfrmCqNw51",
  "key22": "3tc1sgNdTthcATi9Y4a4Tms6xoArKkRWBeuwtm8R2uEx3wyQd1RuLQJ2PQxaiaMPCTHd6RpjRwgaTTM4WSegbPZM",
  "key23": "5WCD5TUfHUL4EZn2xGejZvUr3eSRaRqoam1fdFEwN1zxZxEL2qBksVJFk5cTpPBWHZGBX5QrjvjvbHRSMr8hmkLv",
  "key24": "4YiFGusZTjsNZiBjRouu9oQrtVXnNAvx74vmcFQpHjPNjBK1aVAgAB4Ajiz7fvmbkkM4ykafp3qpTidPXt1c4ULX",
  "key25": "3ky6vgpmVSYV12TuapBk3kcCeCJzGdNS2JN147gRMizLbnkmhUKiGvRvEFnpPCQHh6b1zxJUDBQimDPgJ1NNNKrS",
  "key26": "2bPoaSZzDpNLKdbGqKXAWdKaaFnGCtq7T5Em2PKQho3UWN58mR8NMV2vGRmonzw6AihMDjLjQoLikWaWBfymYp41",
  "key27": "3BfpTtr5sCRhbTMRgByJFfduKFJvgCf2xzvBye22muR4URxSNmrTJrFpKcmKLVaiQfJ9C3hC5HHkwK1JcEhEPW3Q",
  "key28": "619SQsqFwcPF6LwCf1hEwoYnQ5rGQ23gDEMBt1Z7bY36HLEtnYmZA5q7wBcs6fKJw68rjb6HXCKfGQi18nDjFCuA",
  "key29": "2dRsnLUtmrPbrWn8VJ1h326vi9SFkGTcZP2FFo12uEk7CaKCpuExyPNFPB6ovnAQkPYSiKhUeRouGXESLTeczGSF",
  "key30": "9zgRnb1niY6u8XwZGmEikmCLXPumM1Ujuu1XgiEZ4YEqAufYJx2cPUCkCDnvqiue5LHkJjKr3Ssc6JPjfVuwz7L",
  "key31": "4NgYZqbw8mFDKxDS42ZVFCn8xyh5GWcXt7D9h1PGg1GYDdj3UJfrL2dHEkjsLKEmdssZjuFpp4aYZ58kKXYP6anU",
  "key32": "2Yr9m3K6DdKoenfM23XHBwZgf6CECtSSyUCW7h3MGwbgTDo8hhxE5kMDavFEf82Ka1w9wP9CkSNn1dpFGX8UJPgf",
  "key33": "245tzYVZETqspCMjyXADcMJ3sZ8d3aJv2yvwkn5Qq8v1ZMWizSjynoM28hqdJ1FWi7XC8LUb5AMvnhtZUj4ix7eD",
  "key34": "4gwA5uvye98g95STNsmbgBJEedfic6MrftZtjsGb7gqwhS4pbn46tiLEGDUaBumYjaeruchmC2mdhMS5tU1Dze5N",
  "key35": "3ZA1DYodGua2RsUiAACGbJEZgFh1Q7QzLDoGmXjXpixzX7mGgWx66nEs3zkb3Bd2CVjMTDgMCi1FwSehnAjnG1Mg",
  "key36": "x5s9WXLiY3iBomtcRHtd7VCm7iEQo9EDrsbv7eXKHWSsKvUo65BEF8P9EC9wa3M9fCdJuZSR7E7UvWhYKz5L6kX",
  "key37": "4fdKqYaviZ7yz2fbKttN56nYxGYJ7wnpShY3TrYXZA3wpB2JHGG8hiTTtq2cSQzFcrbyf3oKG39jW5PpMcgtzwq1",
  "key38": "5NtikkcgAoycR8d3W265R7V3SVA45rKbrDkdzZXpimdoQo5W4DNj4RAgJkhuMsgAz36HVS627DtLenneuW8ShdK3",
  "key39": "5TBFTmwpP4cRRH45x1FkbyKrPJ8qqXgukHZr4D82V2YhURNW8no2Usec6BweWWnQ9a4gLvSArsidnQiTQQh1PUNo",
  "key40": "52vHikYfVUMMJo1BaTQVrqVMXtiBQDdWSjQBDGkDSooTqKe2L91RGXHiY9nQYY2somFSCrjM2DV4eAoBLFxiAXcf",
  "key41": "5VFxmi4jNqHxaBFpycyvHJub5a8xkez8fEBVAz9AAeDL8pjfhb7YYNbZfL42P6xPi4gSYBQpb7aLMZuSBZ7m77md"
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
