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
    "4yRaCrVUB44XguTv2NmyvrY2txx919ueAzPo4B81Htzy4FQazBf3BmJWEtV7Gi91PqZwpz3LRxLiPdtn8nUf8MRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tZiMASRptzGZ6AJC9UxkwrEb8uh9VBABeaqD3ofpZKsAmJb7CJLTECmDyZmBi79MFbCWutKusvxCVPXTkzeGnMx",
  "key1": "66RvC5Cs265bmaZP6m8WNLgYmtkiJBjU2wQyZpinVSQ5Qgt14XfR92JSFSnsymzuBzNzfEvZXSGGkDRhbxSaYujZ",
  "key2": "3deAsvSZf62hZUQC2E78ZtR9YPNUryMCJc4CXXUPyW9JfqjZWqxFFWmyoCUUTnTmyB7akg4pisakEKCPxx9qjqDb",
  "key3": "4A8G5oEEyLTGAzgS3g6v5RQSc12r9FZEs8NQkQNZPwJYCmsH6hKm4aSjDhuPnHnykvN32SyDK2y3eyZ7ZTD1cJHh",
  "key4": "2JRp4fw29AYtA6F1Y7T9TQJWKoqzLpM4xHJvrzkWBbSGhB2BFQTR5KUjvsxNewnS8Sq8vcdiKN27o8gLup6QsRG9",
  "key5": "cXJoH1EAypTEk2eJAdu7SiL5hmcxd36DhpBACRCP5uryGESUYvi8UMFWnGMc6w97sFH3KbczmP8X114hMSyMu7J",
  "key6": "jnV5APCxWAUcgy1V8MyiRT2nUT4Ty9Et7Gm9kJikSP9Ai6KZSzzHZzFYq33PR3PU2Wy8QdHug5V84Wqg7aL67s1",
  "key7": "5ZpJpjLBURr8C3LpPpHvWcCw94LwnuX4zPMAYhAHS7iZfVcPVJsXVixYTL5xDhSKe4obGpzBKdxpo5sPnihSaeiU",
  "key8": "3czbBS4PSVJGCPLBG8dHKmh7hTjfhRYcFHGG53VRLbcqxF1Z2n1Bg58masK2A6WcMLe9MwgiijfGpBL4bgKi2bay",
  "key9": "MdJosiU1Xs3Z9rem5yGYMEoMcc7bZwFAtNHUZdMEan4GCf3Yo5zBdiRZ2K17VJEPo1hE6M44MBEeA6ooAx5DHzt",
  "key10": "3YwtUYGdjz4V6rhe3mPzHgMZyscDFrZwW9sqQmvyVpAgWczTYnGbDhnnVHU7j61HDZc89H5bHe7TqQY3bRpFwB7P",
  "key11": "4rAfDA3r2C8Thh1bSny3BbNb6ttrawGj75jyxzLyDz8XK65ggKcXQUSgLFEpW3k1K4WBkjsLjttixQNPsrvosvK7",
  "key12": "3Vi3Zggw9t7De8L1V87mpG2ZDh2DckEXYSmoCvJHWEnUfqvovrcrnB2eRixQhbQxuECePCsKEe6YEucc37JwJopK",
  "key13": "2QRdkQ3WyaMSpu7qLno1t3mGjSQoc3DcTXK4cS7VHLtnhrgYJe23o4EArRKxfCMz6nh27eD2cewyMFKshFPFqTey",
  "key14": "4R3FG4QEPfDpxTJMfkEtsFEBxyEfhUydGqcWTURTFNVrneFNT8Ezow47jsvq5Xbx8BvrBuzcSHbzMCv53Qbm7J9y",
  "key15": "5RR3STrg7WJBoTEezszUopKArYUbWhejsLw4fx5q8LWhf5np8hd86k5fAMmsqvmcHG3eZPEnm8JBMSqm4wzEzM3u",
  "key16": "5PvujWtfjRuyZkm7UbXJM8AY3DRWsiSoFJgBAJngN9kd7FuMyP35aDR17NeaMg9wwGEJ7DT9KVM7saRf3W4scJew",
  "key17": "3E1jhqqTPVGMwbiQn9D8VVHvMA22XFh9ArhJTYfYj4hX87bH4JXnM84jbeELWKfsPK1WNBBsdXYz8XceSxcJQfLi",
  "key18": "4CdRoidf7LhbHgEqpJCzKbyXp1yEGA7FXrhQEn9osAipn9NH9VvY3UaU8FhTHF6idTZztrPf7ndyedmPLwFUA6WT",
  "key19": "3QJoQgGJe7tMRZCpvppgDv9Aj5Pd8ANzDm7pokffPiqGs9UPmDhuJurrQhhcmH1D7Nqe9K3ypiZazyY9jZKzKfnx",
  "key20": "4FZPsc7vMyjjioTtmpSdbpLB2XnNoJ78jBwD5JMM4kRtP8CJPzKiFy7k1kLWj8mGnfBazhW8ecr8XL6GwE8d6EU2",
  "key21": "27ajHCmXaPqd4uz7DZTSyymzWtzYDecSsQKXjrLGDTCygFtxAT5CbMEknED7SasQCieYX5nFMN3DuWboQJPh3Dib",
  "key22": "5nm2EPB8bTDeLsdsztomMfc31H78YBeN2zdcP7GSDZDSRFpuMVjbYwhNHd39HfogYWgdBXWdhQMv6LnjGpTZpYiR",
  "key23": "FqBYYd2eiAJ7N6CMihXFeTx1FMxywQSqwQqm4saV2GSA5owxE65hcw1cPTYFojVDF8AxNiMEC1cPYZ8jdNjrNMj",
  "key24": "3YiBxmX7AU3EHhX3ZE3evwQEUR6UwdfZ7J1D38WXpzSUuds7fBk5mRxNrmMHVT5x7HJQLdxM933ikizmVwtJozW5",
  "key25": "4RoT3AK8sZaUzXkMAxbnaahuoJpfjaSLQnfPu6nMx4jsqoWK3eBxRENdxDDFUGqfG9HJYGRCKHV981RSmai9Wn89",
  "key26": "46SqbmuseE6rN3aPnrg2pMUSsKf1d4V2Ztoo9bugi8tMHo2AdqgSvjSe71XFPDMPy8xu8z2kz8z4CxzsXg2sc5QK",
  "key27": "Ynd1kJEoxUepHXB2fWp23jaQ62HpJhgAwEPteisut9NHgzVYssUEqH5mxRvii5aTRU65D7syuZ1L1ENJft5W6G9",
  "key28": "2RbAHymqiXpR8R5PEBwwjXVCyfrJjE6bAXAhsKVTtVupsEFK7ucEGGo2uoGHQ2vzR8ey3JbipUAxemXk3MbTr8cg",
  "key29": "2E4QQ7LnfMYqWb2ihU8GqmHvE274SEe76uomLqv8ysevFVojyMgDQMVLHQCL6kBwFapxc6LDNDspeYy31FEwXEm7",
  "key30": "4Zs9p8xJB8ubfvhPsKJcmgh5cs58nKAAH1eutK4ApaiMdqKgzcVxTtp9R1ei44y3fQ2PS7mkmzVzzVx3vro6Vk3r",
  "key31": "2MyAsZLXPQDCsyC5HUVfXZ1YRSEdhweZsavfgSsv4YzSXWLVFbkwf2mdmJxPxQ3wXTTXcPbwGPeCdqFwwnpbf4nG",
  "key32": "5mUUR5JQREeHNFYLBTWfWbo8mTRQQFZGMbGWtzGsRRxV4VNJnTiKZ8XJDRDHnwVmG8LdkaRr3hgJJJdU1nvb4zet",
  "key33": "38HRDLBmdySHbdnAwUuaCfZwoA4H2NLQkVUBnCRsKNKdX972D45sGCMzCV5baeY7AzH4vNTBSJpWz2f3cUs4f5yZ",
  "key34": "56k1nxdHYueTBTvdydwEBSi31Ph4ZYuKBdSnRACxDKNYNh9Mb3SGQJR9AgZYFpYG5p75qyGjhUECbkKBgxX9HZva",
  "key35": "2SiDQc24Q4GarGZsDRELmdBZJwHz1YB2kf8ZYxHdi2SaqLsRSSDMHQHz6gah2JN5QnpYy9iBjquziNduukWYBGX1",
  "key36": "3ioysW5bcHjowkQ4xcHU8qqGGmhxCgyQisHhjtCxLy6KgywaZa2r3ggdRuf86wAkipMkyxTVZfpHLvXfSxiYE8XA",
  "key37": "61qsnw3XxWizaptFriiyxP9rncwrBDwEFsuTLpGJX9b9vbxrhpwTjXSqJB8wFhyX4wVKvSKEVpr8uduyYDpW3xDZ",
  "key38": "671cnYEAdkqFbw2dz89AGzwarqNHXJNKLBeAx4ZaaZTtSPmH6eiLJXFz5QHD7QJDhjJhM2eAW7Bk2uVM1MyL1YB7",
  "key39": "5nNoZSw6Ax2XPZvUgb9FcxmxxwLjEeqxQsnnvxZbpU54nU32xAG8EJxnmT34JD23gwPFfrDBBA5m4Ubap6dFJj4P",
  "key40": "63R8dwx1vrgfNUkX2wn6WrNEmgEMjF5bDX8yUTZtGDjY5m8YyD6PPsWtQUXUrEHy5Uz3nY5b7SHgPNMbVJtMGi7V",
  "key41": "ghV8nHJTrZkJAYRRMxL2RrQsBVpoWxvi2sx6KGM27bCEQgUmegNFoSSPmG6RorttZo6v9apjjvNxwrJtaNK2bc3",
  "key42": "41n2BmVWGkEV7do1ED6dg9gS8wFPRcHw9NFp2JpSJzMrYJhsCEW87f6AxJXJCxDvHKj7eBGkD7ySSRmR3HbvRjFo",
  "key43": "3MRPu1baLayW417EFwuChYNS9LMrsqmPtSDggtXj6FzNDwafRkd1eYuw371ApUgwyJ6HJwkG5fEHyYSA5HCg9zKQ",
  "key44": "4GKaFKV78yd5VwA1hmWFAEN6dKoTyD6Hru5qtLC1v34T6HvPy4Kh2U5xpxNs3XesLJAmgCpeUCJdMLfW1SF4jbPw"
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
