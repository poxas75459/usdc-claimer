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
    "4so3D18NWfFxnkAnPYFEhyQ9iiy1x654KzNJP4qMfy5YXoRJwUXdTdmf5v7sPLzwrjGBd5BHkKE1BMLyESP2CT8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rUxRe8hqdmXzc2DN3EH19CdgiwN5ejCELVLn5oBumZpEBKFhmjrwV2dSHgZraAhnEPMR7cArGTTT3wZ5Lj9jfxA",
  "key1": "3RBRQNFitXdJJGNuuyWNXU1jmxzLzekFYk34NmM95TY7PseV3Ff51G168Yytafm8DiFwjCGSWsbdiggEEkgr54MD",
  "key2": "xfYspT4x22mw9t75yqw7yL3p9MwKCCr4ZHHQgNXey9aHHyK3E8RkgdXHZwyKTtXsPF3LZyus2HcFVk6M61PE3tR",
  "key3": "23Jdj5ehzHDn71sn5u9o9RFVFFdhaE2KseVDUCT8yVshiBzF1Q17zvNJLukGoNyxrXDzK4xvsE8BVu5vBWrgFo9w",
  "key4": "2pcTqdwMfP1SQZiwo2ZZj5X4fwviXurkERq3tLnCntjcEqxBTS4w1UMj7jCjNsR1HwPu9WXD9vsbMbgVzUDpYS72",
  "key5": "494k6DFdyyco61h3EnVHpv6YqD4DcGmXUDtAg4dzV4gueTXwCnAstDfEMnmVEgBaWssfgFtS9k4uWYq8NQxHekvn",
  "key6": "4KSEq2GG7RcSD26MhJzb5xFECBHfMAirpVCWVPokKsAqbvFiPwCHcdScLZXwjhnBMSeh2wZGEQpN3apYHjjFFAyF",
  "key7": "2rLYQVU8U8kMzMczvoGXv9MEPxdzXZbtQ9UXWxktaVY7WfEKMnaX3V3MpqQ9mLGwio59hXM1ZxA4hepQAowPXEfu",
  "key8": "2MW5RqNPRxB3YZjSpinFrXP5Yc9FxXebfEfxPuiT19mk5aLkFZdg96Qn2Uct1Pdwg34V6DUK15jMn4d1n37CxBaX",
  "key9": "5PUum72YJRsAQZVJp4tHgvvSqfgSyE2WPnWvBFv42HkMHiFXU8aUDaPFM7csEvRaB1RBUzaj13CXC3JLRm1ynszg",
  "key10": "33KMvcVU2hHfrYjtRCrHQ1QQYQhvgHJJJAPGq77jwrCfsPc6NHw3o3PtPZAapuC83XPBPuVwVBbHfNNqs1tsxtqm",
  "key11": "5PAgreBqSuCm5Z42jMHCzuuKxBjsXRAtYbqTN6JAxHb2nYC6xtQK5GLQg8Q3mCnwTLQ71nuARy63CYjJjCTpFcnK",
  "key12": "2myn62itpaCQt5AzXzpyPZphCW4heENMNUuZPQhngUacPn1U6hn2XqaiUzQYPgjdeKfbkXZcacmum8PsaND4VMN2",
  "key13": "3VFTto3XJH8hJqiahpyxmp5ATJGbbFrTZ4Z8wUxsjLBKDbFeKfU4p1xVA2ZhpeH4CjD1xfhiCf4DGjvvdtvJubwU",
  "key14": "5edHew889RbrY6bFZpyRaTsmWEBD4tkdY2oeHjziinPAWsPTQC4sVE1hMwRZ6xJV1CXGdkBKTPSmp6rRi3PeYKHp",
  "key15": "2gQRYA6sSLNxjJVeqqyLVcJQSCcSbCtB4KZecH95rbFpD8tEXuyStgPB9yLA1hu2nKp8kkknp78ucxcdD8mBy5es",
  "key16": "3iXZPJy6NFKmvuj2Y9iWZXFDEcjBv19nEQ4kLvRyc3G1nPZaw7fF5jh7iMAV8H6ci9Doxa41sPGWqv8zANQG73a2",
  "key17": "3bxEibgDijmxuyxzViAUnWjGEu5mHzxByTRY4XZUBQSxdLLpr9cPNFKsmLE6eNQGSGUpPJLLEH2FbMMK5mYwwsiT",
  "key18": "4U53VNt1XEqTUXnktGRuNeCrZfJThQMDDFuYXCZnt4DJagWMJieDTitW1xt5wHRxKvP76VJFx2t6dE1ijteB1Gm",
  "key19": "4cSGAtC3QbdqVXC1uYt6qEyagDZgUpHxbABT4wbaiouLJTH1h1jXovXZBeNaEVJBFPbVSizyWvsyDiVDN8W3jqLc",
  "key20": "51ATcRYHzG1wLMTmzvB6fFoZNMRncGGJZkXqJk2zS8oh3dent5wqKMnEVXQXptQEyjr1SBaZXfkM7KEuve8sdimL",
  "key21": "2fbGGcbAq6DXuJcZgBNJwqKAyA1dNeioBnMzAHDD9n51XCsfpzyrWm4e91h5fyKBnwNh2QazZ2ih1sUUSekyic2K",
  "key22": "5jxn17ARGZq9PvHPzDB1Q8pC2NKiDosT1yXZkMpjXoigyviEo7jXELTqauLrRVtXLtJkHSFa1mTH7UfvTTg2saPx",
  "key23": "4AjumqAHJ7aSpjF9PFrEQsP5FUcAC58jWrAZrxBrRpHZRtoSr6WFTFk1PoWJtgUtQcQaMcW8QqxxNsnbctrcMPwA",
  "key24": "2cXihAXTrBoRvu3WQ9BDDS3xzAWwT1Ydn8SDS69vyF7Fb6o1etHmdbF7tQKjr8ZzubBiYXKEAQtUNkqoydxenkA3",
  "key25": "2aZpwquFXWSvF9Rj83XPTJ4uK1qV7nXgDt8iwLkJngBG5cuc8UytmbNHq7HBnW7mdigBrXJTz9w5JfTcpoGAZMuS",
  "key26": "499LxtwSSi1j276KBPaqNoscbPpJ5SWPxzAYHzqytXbkfiHKqWZXJNKUBcuDxAYxiWqfXJoUFdHJ5xmbXNknmxCK",
  "key27": "2u7Ju2dpDWLbbFCEFkVC32bYP2mx45pPKHCGg71nEEXQ7MZzLUY1y2bGrFHdnjiZz2oa264EYt8xaBzQaLRSDCcN",
  "key28": "29uc1WoYnwr1Lg15SRTxvpR8nj8JFQ1hkHShG2P2zGDfqeXTuKK8t9e8mohyEmSmxrM5iGUYqBiXvjWoVrr39eVg",
  "key29": "2LoEfQBypYgwv5JrHBShvy4bpgH2BkPZ437Tduqth6Wm7nvkF9diHwCMLp1jFCz5HxYosciWjRzRGKn9GqitdftR",
  "key30": "63agtEtpZJ2HPHg8QCLLgZPtP42ZnQ7j2751Gbkq5Xs93jSNgcJT89LSvT1ior1E1rEp5PJAnnMC48NA2uZwgV4X",
  "key31": "vD1qh47Ms1VCLRWh8KhK3dYmVUdMKjS3ZkXHKj6csS4m9o6CzDuZNJ83P8KJC5APPU5tM2bD4iZi6vou6S1G3gb",
  "key32": "oXdefJvhLvLTjkvUcjoe6R6truraFNRbM7gz8Y2RP3dzH8RnZbd7Pxi8sbWGYoNcdGL5dmBgWPG5c4bzYJEsEDL",
  "key33": "5hLiqStsAC5uysHSHR9WbFTsNU7rn56ogs8Q7g6B2gbUZo7iH8Mhmngw1vU7eremfYpkpTGj5eKEpej6SHW8CZ4E",
  "key34": "3p7FQEeR4BXHbXFB32XaMRgBC41gkzUGDRNYFGAsFBaaEJCxqCj6wMTwe5d2uBfxqJussAZBeaUNNn3ps4E8Pmi6",
  "key35": "4dhZsi1bZHRQqJUhmUfWKz8nztuqLn1Ts8L4opDY1cycMHeFKACBug5sqa4wixhvZS1yr97Jw7ABuRL63qcw8Vr6",
  "key36": "3kxcuF2nAuL58ro9Nd1rUVpgX7TXKnNQpitsoESB7yq4v99wgPZddVsoMMz7w4YDHLysVVh3NxRYt9Gyu8h6VRaA",
  "key37": "Keb5oaWu9QCJaGCZvX6a8t1ZYwBp9Zq5fXB7yBLt3vkzLaqtcJfgk7QRZSRKrg2S4HVot4FtDxFcft1QsEQ3MBN",
  "key38": "2A22Wow6ZLV3RH3daox4vgnmTjaFHZkeibUXfCRzzZGzkcTZ3V6S5cuyr9LTm36eSPytxoPAzEZZtnduzdvSmc6p",
  "key39": "4pfpPNqbcBCmpK1AD729oCWz7xhSqn58xL676biiUhLWe1cNnEGvNLYpX15DynmfQH2149iGMs4sr42Ho1si5GfM",
  "key40": "3LxMiMHpyimyTh8BofhBMVtXTvCNmXiUEwXctjuBbgupbigTRr6WyZ3fjNrbmdxyMy1WvPySNragbf3MQAoEcDPT",
  "key41": "71yQ7qVoyEcai5eNP7vG18d2Xkoj3H46gNmtNTMNKFxYNvW7u4vMAAxbHNZ24wCjsH33jEndz5AHYyJhToAkarU",
  "key42": "5yNCdCqWP8gUbzpC7EadZYX7qk6895hyCxAq2WB6cGB5Ss1VAFE5hRDrzx2mzs4tUsFWRyrWHumA1fmecficnZvV",
  "key43": "21azBqJayNxjcRyGPdg2wJakau4xnGfxRQ5cxAvnEqk1UHEbZVqbPrJKGJJ3yxe2Binf5q9aA2nVudFyuwXcJoBF",
  "key44": "2cpS8UWBjpT2CAELDmJa6ULwsh8RHCHTmHy8JDYzeAsurYLCbfhq6HbwNe4kHopDgYnKj9H5BkxjoCoD81ea24Xu"
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
